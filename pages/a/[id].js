import Layout from '../../components/AppLayout';
import Bidding from "../../components/Bidding";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'reactstrap';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMoneyBill, faUsers, faThumbsUp, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { getToken } from '../../utils/auth';
import socketIOClient from 'socket.io-client';

const apiConfig = require('../../api-config');
const defaults = require('../../utils/defaults');
const socket = socketIOClient(apiConfig.serverUrl);

class AuctionDetail extends React.Component{
    constructor(props) {
        super(props);
        var token = this.props.token;
        this.getUser(token);

        this.state = {
            loggedIn: token ? true : false,
            user: {},
            bid: "",
            activeIndex: 0,
            animating: false,
            sale: defaults.defaultSale,
            maxBid:{
                amount: 0,
                bidder: {
                    email: "",
                    nameSurname: ""
                }
            },
            biddingFade: {
                message: "",
                in: false
            }
        };
        this.handleNewBid = this.handleNewBid.bind(this);
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.getSale = this.getSale.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount(){
        const saleId = this.props.id;
        this.getSale(saleId);
        this.setState({bid: ""});
        socket.on('bid update on ' + saleId, () => {
            this.getSale(saleId);
        });
        console.log("saleId: " + saleId);
        socket.on('sale ' + saleId + ' expired', () => {
            this.getSale(saleId);
        });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }
    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleNewBid();
            this.getSale(this.state.sale._id);
        }
    }
    handleNewBid(){
        if (this.state.bid === ""){
            this.showFade("Önce teklifinizi girin.");
            return;
        }
        if (this.state.bid < this.state.sale.firstPrice){
            this.showFade("Başlangıç fiyatından düşük teklif veremezsiniz. (" + this.state.sale.firstPrice + "₺)");
            this.setState({
                bid: ""
            });
            return;
        }
        if (this.state.bid < this.state.maxBid.amount){
            this.showFade("En yüksek tekliften düşük teklif veremezsiniz. (" + this.state.maxBid.amount + "₺)");
            return;
        }
        if (this.state.bid == this.state.maxBid.amount){
            this.showFade(this.state.bid + "₺ en yüksek teklif, aynı teklifi vermezsiniz.");
            return;
        }

        socket.emit('new bid', {
            saleId: this.state.sale._id,
            bid: {
                amount: parseInt(this.state.bid),
                bidder: this.state.user
            }
        });
    }
    showFade(message){

        this.setState({biddingFade: {
                message: message,
                in: true
            }});

        setInterval(() => {
            this.setState({
                biddingFade: {
                    message:"",
                    in:false
                }
            });
        },60000);

    }
    getUser(token){
        const url = apiConfig.serverUrl + '/user/get';
        axios.post(url, {}, {
            headers:{
                authorization: token
            }})
            .then((response) => {
                this.setState({
                    user: response.data.user
                });
            })
            .catch(function (error) {
                console.log(error);
            }.bind(this));
    }
    getSale(id){
        const url = apiConfig.serverUrl + '/sale/' + id;
        axios.get(url)
            .then((response) => {
                var maxBid = response.data.sale.bids.length === 0 ? {
                    bidder: {
                        email: "",
                        nameSurname: ""
                    },
                    amount: 0
                }
                :
                    response.data.sale.bids.reduce((a, b) => {
                    return a.amount > b.amount ? a : b;
                });
                var sale = response.data.sale;
                sale.isActive = (Date.now() < sale.endDate);
                this.setState({
                    sale: sale,
                    maxBid: maxBid
                });
            })
            .catch((error) => {
                console.log(error);
                //if(!error.response) Router.push('/index');
                //if(error.response.status === 404) Router.push('/index');
            })
    }
    render() {
        var loggedIn = this.state.loggedIn;
        const userEmail = this.state.user ? this.state.user.email : "";

        const images = this.state.sale.images;
        const items = [];

        var i;
        for(i in images){
            items.push({
                src: apiConfig.serverUrl + '/images/products/' + images[i],
                altText: this.state.sale.title,
                caption: this.state.sale.title
            });
        }

        const next = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({
                activeIndex: nextIndex
            });
        };

        const previous = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
            this.setState({
                activeIndex: nextIndex
            });
        };

        const goToIndex = (newIndex) => {
            if (this.state.animating) return;
            this.setState({
                activeIndex: newIndex
            });
        };

        const slides = items.map((item) => {
            return (
                <CarouselItem className="text-center"
                    onExiting={() => this.setState({animating:true})}
                    onExited={() => this.setState({animating:false})}
                    key={item.src}
                >
                    <img style={{maxHeight: '300px'}} src={item.src} alt={item.altText} />
                </CarouselItem>
            );
        });

        const date = new Date(this.state.sale.endDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const endDate = this.state.sale.endDate === 0 ? "-" : date.toLocaleDateString('tr-TR', options);

        return (
            <Layout page="home" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%', boxShadow: '0px 10px 5px 0px #ccc'}} >
                    <h2> {this.state.sale.title} {userEmail === this.state.sale.owner.email ?
                        <Badge className="ml-2" color="dark" pill>Sizin ilanınız</Badge> : ""
                    }
                        <span className="float-right">

                        </span>
                    </h2>
                    <hr/>
                    <p style={{fontFamily:'verdana', fontSize:'17px', marginBottom:'50px'}}>
                        {this.state.sale.description}
                    </p>
                    <div className="row">
                        <div className="col-md-8">
                            <Carousel
                                activeIndex={this.state.activeIndex}
                                next={next}
                                previous={previous}
                            >
                                <CarouselIndicators items={items}
                                                    activeIndex={this.state.activeIndex}
                                                    onClickHandler={goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                            </Carousel>
                        </div>
                        <div className="col-md-4 pt-4">
                            <Bidding loggedIn={loggedIn}
                                     saleOwner={loggedIn && this.state.sale.owner.email === this.state.user.email}
                                     finishedSale={!this.state.sale.isActive}
                                     maxBidder={loggedIn && this.state.maxBid.bidder.email === this.state.user.email}
                                     bid={this.state.bid}
                                     biddingFade={this.state.biddingFade}
                                     endDate={this.state.sale.endDate}
                                     maxBid={this.state.maxBid}
                                     handleInputChange={this.handleInputChange}
                                     handleKeyDown={this.handleKeyDown}
                                     handleNewBid={this.handleNewBid}
                                     />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="mb-4 mt-4">
                                <FontAwesomeIcon icon={faUser} width="16" /> <b>Satıcı: </b>
                                {this.state.sale.owner.nameSurname}
                            </p>
                            <p className="mb-4">
                                <FontAwesomeIcon icon={faMoneyBill} width="16" /> <b>Başlangıç Fiyatı: </b>
                                {this.state.sale.firstPrice}₺
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p className="mb-4 mt-4">
                                <FontAwesomeIcon icon={faUsers} width="16" /> <b>Teklif sayısı: </b>
                                {this.state.sale.bids.length}
                            </p>
                            <p className="mb-4">
                                <FontAwesomeIcon icon={faThumbsUp} width="16" /> <b>Durum: </b>
                                {this.state.sale.state}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p className="mb-4 mt-4">
                                <FontAwesomeIcon icon={faCalendarAlt} width="16" /> <b>Kapanış: </b>
                                {endDate}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} width="16" /> <b>Konum: </b>
                                {this.state.sale.city}, {this.state.sale.district}
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

AuctionDetail.getInitialProps = async function(context) {

    const {id} = context.query;

    const token = getToken(context);

    return {id, token};

};

export default AuctionDetail;