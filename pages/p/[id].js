import Layout from '../../components/AppLayout';
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
                    <h2> Güç Yüzüğü </h2>
                    <hr/>
                    <div className="row">
                        <div className="col-md-5">
                            <img src="/ring.jpeg" width="100%" />
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <p className="mb-5 mt-4">
                                <FontAwesomeIcon icon={faUser} width="16" /> <b>Satıcı: </b> Gamze Gülbahar
                            </p>
                            <p className="mb-5">
                                <FontAwesomeIcon icon={faMoneyBill} width="16" /> <b>Alış fiyatı: </b> 500₺
                            </p>
                            <p className="mb-5">
                                <FontAwesomeIcon icon={faUsers} width="16" /> <b>Teklif sayısı: </b> 13
                            </p>
                            <p className="mb-5">
                                <FontAwesomeIcon icon={faThumbsUp} width="16" /> <b>Durum: </b> Yeni gibi
                            </p>
                            <p className="mb-5">
                                <FontAwesomeIcon icon={faCalendarAlt} width="16" /> <b>Kapanış: </b> 21 Kasım 2019
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Sale;