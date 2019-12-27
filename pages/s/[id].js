import Layout from '../../components/AppLayout';
import ChatBox from "../../components/ChatBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign, faUser, faMoneyBill, faUsers, faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

class Sale extends React.Component{
    render() {
        var loggedIn = false;
        return (
            <Layout page="home">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%', boxShadow: '0px 10px 5px 0px #ccc'}} >
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="mb-3" style={{maxHeight: '400px', overflow: 'hidden'}}>
                                <img src="/tall.jpeg" width="100%" />
                            </div>
                            <h4> Piyano </h4>
                            <hr/>
                            <div className="row mt-4">

                                <p className="col-md-6 ">
                                    <FontAwesomeIcon icon={faUser} width="16" /> <b>Alıcı: </b> Gamze Gülbahar
                                </p>
                                <p className="col-md-6 ">
                                    <FontAwesomeIcon icon={faMoneyBill} width="16" /> <b>Satış fiyatı: </b> 500₺
                                </p>
                                <p className="col-md-6">
                                    <FontAwesomeIcon icon={faUsers} width="16" /> <b>Teklif sayısı: </b> 13
                                </p>
                                <p className="col-md-6 mb-4">
                                    <FontAwesomeIcon icon={faCalendarAlt} width="16" /> <b>Kapanış: </b> 21 Kasım 2019
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <ChatBox/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Sale;