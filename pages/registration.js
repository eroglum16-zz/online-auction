import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Link from "next/link";

class Registration extends React.Component{
    render() {
        return (
            <Layout page="registration">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            <h2 className="text-light bg-dark text-center rounded p-2"> Kayıt Olun </h2>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Input bsSize="lg" type="text" name="nameSurname" id="nameSurname" placeholder="Adınızı ve soyadınızı girin " />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg" type="email" name="email" id="email" placeholder="Email adresinizi girin" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg" type="password" name="password" id="password" placeholder="Parola belirleyin" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg" type="password" name="passwordConfirm" id="password-confirm" placeholder="Parolanızı teyit edin" />
                                </FormGroup>

                                <Button color="secondary" size="lg" block>Kaydı Tamamla</Button>
                            </Form>
                            <hr/>
                            <p>Zaten üye misiniz?
                                <Link href={'/login'} >
                                    <a className="text-dark"> Giriş yapın</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Registration;