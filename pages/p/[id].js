import Layout from '../../components/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyBill, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {auth, getUser} from "../../utils/auth";
import {getSale} from "../../utils/api";
import Router from "next/router";
import {toTimeString} from "../../utils/miscellaneous";
import ChatBox from "../../components/ChatBox";

const apiConfig = require('../../api-config');
const defaults = require('../../utils/defaults');

class Purchase extends React.Component{
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
                Router.push('/purchases');
                return;
            }
            setInterval(() => {
                if(response.maxBid.bidder.email !== this.state.user.email){
                    Router.push('/purchases');
                }
            }, 1000);
            this.setState({
                sale: response.sale,
                maxBid: response.maxBid
            });
        });
    }
    render() {
        const seller = this.state.sale.owner.nameSurname;
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
                                    Aldınız
                                </Badge>
                            </h4>
                            <hr/>
                            <div className="row mt-4">

                                <p className="col-md-6 ">
                                    <FontAwesomeIcon icon={faUser} width="16" /> <b>Satıcı: </b> {seller}
                                </p>
                                <p className="col-md-6 ">
                                    <FontAwesomeIcon icon={faMoneyBill} width="16" /> <b>Alış Fiyatı: </b> {salePrice}₺
                                </p>
                                <p className="col-md-12 mb-4">
                                    <FontAwesomeIcon icon={faCalendarAlt} width="16" /> <b>Kapanış Tarihi: </b>
                                    {toTimeString(this.state.sale.endDate)}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <ChatBox interlocutor={seller}
                                     saleId={this.state.sale._id}
                                     salePrice={salePrice}
                                     userToken={this.props.token}
                                     userEmail={this.state.user.email}
                                     receiverEmail={this.state.sale.owner.email} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Purchase.getInitialProps = async ctx => {
    const {id} = ctx.query;

    // Check user's session
    const token = auth(ctx);

    return { id, token }
};

export default Purchase;