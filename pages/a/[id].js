import Layout from '../../components/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign, faUser, faMoneyBill, faUsers, faThumbsUp, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

class Auction extends React.Component{
    render() {
        var loggedIn = false;
        return (
            <Layout page="home">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%', boxShadow: '0px 10px 5px 0px #ccc'}} >
                    <h2> Piyano </h2>
                    <hr/>
                    <p style={{fontFamily:'verdana', fontSize:'17px', marginBottom:'50px'}}>
                        Değeri yüksek profesyonel bir piyano. Temiz kullanılmış ve tüm parçaları sağlam.
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/piano.jpg" width="100%" />
                        </div>
                        <div className="col-md-5">
                            <p className="mb-4 mt-4">
                                <FontAwesomeIcon icon={faUser} width="16" /> <b>Satıcı: </b> Gamze Gülbahar
                            </p>
                            <p className="mb-4">
                                <FontAwesomeIcon icon={faMoneyBill} width="16" /> <b>Başlangıç Fiyatı: </b> 500₺
                            </p>
                            <p className="mb-4">
                                <FontAwesomeIcon icon={faUsers} width="16" /> <b>Teklif sayısı: </b> 13
                            </p>
                            <p className="mb-4">
                                <FontAwesomeIcon icon={faThumbsUp} width="16" /> <b>Durum: </b> Yeni gibi
                            </p>
                            <p className="mb-4">
                                <FontAwesomeIcon icon={faCalendarAlt} width="16" /> <b>Kapanış: </b> 21 Kasım 2019
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} width="16" /> <b>Konum: </b> İstanbul, Sarıyer
                            </p>
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
                </div>
            </Layout>
        );
    }
}

export default Auction;