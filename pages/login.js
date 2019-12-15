import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React from "react";
import axios from "axios";

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
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleLogin(){
        const apiConfig = require('../api-config');
        const url = apiConfig.serverUrl + '/authenticate';
        axios.post(url, {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                Router.push('/index');
            })
            .catch(function (error) {
                this.setState({
                    alert: {
                        message: error.response.data.message,
                        color: 'danger'
                    }
                });
            }.bind(this));
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
                            <h2 className="text-light bg-dark text-center rounded p-2"> Giriş Yapın </h2>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="email"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.handleInputChange}
                                           id="email"
                                           placeholder="Kayıtlı email adresiniz" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.handleInputChange}
                                           id="password"
                                           placeholder="Parolanız" />
                                </FormGroup>
                                <p>
                                    <Link href={'/forget-password'} >
                                        <a className="text-dark "> Parolamı unuttum</a>
                                    </Link>
                                </p>
                                <Button color="secondary"
                                        size="lg"
                                        onClick={this.handleLogin}
                                        block>
                                    Kaydı Tamamla
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
    const {registered} = context.query;
    return {registered};
};

export default Login;