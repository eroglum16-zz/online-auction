import Layout from '../../components/AppLayout';
import ChatBox from "../../components/ChatBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign, faUser, faMoneyBill, faUsers, faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import {auth, getUser} from "../../utils/auth";
import {getSale} from "../../utils/api";
import {toTimeString} from "../../utils/miscellaneous";
import Router from 'next/router';

const defaults = require('../../utils/defaults');
const apiConfig = require('../../api-config');

class Sale extends React.Component{
    constructor(props) {
        super(props);
        let token = this.props.token;
        this.state = {
            loggedIn: !!token,
            user: {},
            sale: defaults.defaultSale,
            maxBid: {
                amount: 0,
                bidder: {
                    email: "",
                    nameSurname: ""
                }
            }
        };
    }
    componentDidMount() {
        getUser(this.props.token).then(user => {
            this.setState({
                user: user
            });
        });
        getSale(this.props.id).then(response => {
            if (!response){
                Router.push('/sales');
                return;
            }
            setInterval(() => {
                if(response.sale.owner.email !== this.state.user.email){
                    Router.push('/sales');
                }
            }, 1000);

            this.setState({
                sale: response.sale,
                maxBid: response.maxBid
            });
        });
    }

    render() {
        const buyer = this.state.maxBid.bidder.nameSurname;
        const salePrice = this.state.maxBid.amount;
        return (
            <Layout page="me" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white"
                     style={{ padding:'3%', marginTop:'3%', boxShadow: '0px 10px 5px 0px #ccc'}} >
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="mb-3" style={{maxHeight: '400px', overflow: 'hidden'}}>
                                <img src={apiConfig.productImageBase + this.state.sale.images[0]} width="100%" />
                            </div>
                            <h4>
                                {this.state.sale.title}
                                <Badge className="ml-3" color="success" pill>
                                    Sattınız
                                </Badge>
                            </h4>
                            <hr/>
                            <div className="row mt-4">

                                <p className="col-md-6 ">
                                    <FontAwesomeIcon icon={faUser} width="16" /> <b>Alıcı: </b> {buyer}
                                </p>
                                <p className="col-md-6 ">
                                    <FontAwesomeIcon icon={faMoneyBill} width="16" /> <b>Satış Fiyatı: </b> {salePrice}₺
                                </p>
                                <p className="col-md-12 mb-4">
                                    <FontAwesomeIcon icon={faCalendarAlt} width="16" /> <b>Kapanış Tarihi: </b>
                                    {toTimeString(this.state.sale.endDate)}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <ChatBox interlocutor={buyer}
                                     saleId={this.state.sale._id}
                                     salePrice={salePrice}
                                     userToken={this.props.token}
                                     userEmail={this.state.user.email}
                                     receiverEmail={this.state.maxBid.bidder.email} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Sale.getInitialProps = async ctx => {
    const {id} = ctx.query;

    // Check user's session
    const token = auth(ctx);

    return { id, token }
};

export default Sale;