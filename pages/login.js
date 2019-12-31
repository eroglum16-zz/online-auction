import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, FormGroup, Input, Alert} from 'reactstrap';
import Link from "next/link";
import React from "react";
import axios from "axios";
import {guest, login} from '../utils/auth'

const validator = require('../utils/validations');

class Login extends React.Component{
    constructor(props) {
        super(props);
        const message = this.props.registered ? 'Kaydınız oluşturuldu, lütfen giriş yapın!' : '';
        const color = this.props.registered ? 'success' : '';
        this.state = {
            alert: {
                message: message,
                color: color
            },
            email: this.props.registered ? this.props.registered : '',
            password: ''
        }
        this.handleInputChange      = this.handleInputChange.bind(this);
        this.handleLogin            = this.handleLogin.bind(this);
        this.handlePasswordEnter    = this.handlePasswordEnter.bind(this);
        this.handleEmailEnter       = this.handleEmailEnter.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleEmailEnter(event) {
        if (event.key === 'Enter') {
            document.getElementById('password').focus();
        }
    }
    handlePasswordEnter(event) {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    }
    handleLogin(){
        if(!this.validate()) return;
        const apiConfig = require('../api-config');
        const url = apiConfig.serverUrl + '/user/authenticate';
        axios.post(url, {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                const token  = response.data.token;
                login({ token });
            })
            .catch(function (error) {
                if (error.response){
                    let message = error.response.data.message;
                    this.setState({
                        alert: {
                            message: message,
                            color: 'danger'
                        },
                        password: ''
                    });
                }else{
                    this.setState({
                        alert: {
                            message: 'Sunucudaki bir sorundan dolayı kayıt işleminizi şu anda gerçekleştiremiyoruz.',
                            color: 'info'
                        }
                    });
                }
            }.bind(this));
    }
    validate(){
        if (!validator.isEmail(this.state.email)){
            this.setState({
                alert: {
                    message: 'Geçerli bir email adresi girmediniz.',
                    color: 'danger'
                }
            });
            return false;
        }else if (this.state.password.length === 0){
            this.setState({
                alert: {
                    message: 'Şifrenizi girmediniz.',
                    color: 'danger'
                }
            });
            return false;
        }else return true
    }
    render() {
        return (
            <Layout page="login">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            { this.state.alert.message.length > 0 ?
                                <Alert color={this.state.alert.color}>
                                    {this.state.alert.message}
                                </Alert>
                                : ''
                            }
                            <h2 className="text-light bg-dark text-center rounded p-2"> Kullanıcı Girişi </h2>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="email"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.handleInputChange}
                                           onKeyDown={this.handleEmailEnter}
                                           id="email"
                                           placeholder="Kayıtlı email adresiniz" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.handleInputChange}
                                           onKeyDown={this.handlePasswordEnter}
                                           id="password"
                                           ref="password"
                                           placeholder="Parolanız" />
                                </FormGroup>
                                { true ? false :
                                <p>
                                    <Link href={'/forget-password'} >
                                        <a className="text-dark "> Parolamı unuttum</a>
                                    </Link>
                                </p>
                                }
                                <Button color="secondary"
                                        size="lg"
                                        onClick={this.handleLogin}
                                        block>
                                    Giriş Yapın
                                </Button>
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

Login.getInitialProps = async function(context) {
    guest(context);
    const {registered} = context.query;
    return {registered};
};

export default Login;