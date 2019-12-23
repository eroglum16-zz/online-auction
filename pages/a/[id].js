import Layout from '../../components/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign, faUser, faMoneyBill, faUsers, faThumbsUp, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import axios from "axios";

const apiConfig = require('../../api-config');
const defaults = require('../../utils/defaults');

class AuctionDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false,
            sale: defaults.defaultSale
        }
    }
    componentDidMount(){
        const saleId = this.props.id;
        this.getSale(saleId);
    }
    getSale(id){
        const url = apiConfig.serverUrl + '/sale/' + id;
        axios.get(url)
            .then((response) => {
                this.setState({
                    sale: response.data.sale
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        var loggedIn = false;
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
            <Layout page="home">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%', boxShadow: '0px 10px 5px 0px #ccc'}} >
                    <h2> {this.state.sale.title} </h2>
                    <hr/>
                    <p style={{fontFamily:'verdana', fontSize:'17px', marginBottom:'50px'}}>
                        {this.state.sale.description}
                    </p>
                    <div className="row">
                        <div className="col-md-9">
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
                        <div className="col-md-3 pt-4">

                                <h4  className="text-center">En Yüksek Teklif</h4>
                                <p className="text-center"><FontAwesomeIcon icon={faLiraSign} width="16" /> 1200</p>
                                <hr/>
                                <h5 className="text-center mb-3">Teklif Ver</h5>
                            {
                                loggedIn  ?
                                <p className="text-center">
                                    Teklif vermek için
                                    <Link href={'/registration'} >
                                        <a className="text-dark"> üye olun</a>
                                    </Link>
                                </p>
                                :
                                <div className="text-center justify-content-md-center">
                                    <Form>
                                        <FormGroup>
                                            <InputGroup
                                                style={{width:'60%', marginLeft:'20%'}} >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>₺</InputGroupText>
                                                </InputGroupAddon>
                                                <Input className="text-center"
                                                       bgSize="sm"
                                                       type="number"
                                                       name="offer"
                                                       placeholder="Teklifiniz"/>
                                            </InputGroup>

                                        </FormGroup>
                                        <Button color="dark">Gönder</Button>
                                    </Form>
                                </div>
                            }

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

    return {id};

};

export default AuctionDetail;