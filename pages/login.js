import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Link from "next/link";

class Login extends React.Component{
    render() {
        return (
            <Layout page="login">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            <h2 className="text-light bg-dark text-center rounded p-2"> Giriş Yapın </h2>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Input bsSize="lg" type="email" name="email" id="email" placeholder="Kayıtlı email adresiniz" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg" type="password" name="password" id="password" placeholder="Hesap parolanız" />
                                </FormGroup>
                                <p>
                                    <Link href={'/forget-password'} >
                                        <a className="text-dark "> Parolamı unuttum</a>
                                    </Link>
                                </p>
                                <Button color="secondary" size="lg" block>Giriş Yap</Button>
                            </Form>
                            <hr/>
                            <p>Hesabınız yok mu?
                                <Link href={'/registration'} >
                                    <a className="text-dark"> Üye olun</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Login;