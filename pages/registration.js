import React, { useState } from 'react';
import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import Link from "next/link";
import axios from "axios";
import Router from 'next/router';

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nameSurname: '',
            email: '',
            password: '',
            passwordConfirm: '',
            alertMessage: ''
        };
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleRegistration(){
        const apiConfig = require('../api-config');
        const url = apiConfig.serverUrl + '/user/save';
        if (this.state.password !== this.state.passwordConfirm){
            document.getElementById('password-confirm').style.border = '1px solid red';
            return;
        }
        var pass = bcrypt.hashSync(this.state.password, salt);
        axios.post(url, {
            nameSurname: this.state.nameSurname,
            email: this.state.email,
            password: pass
        })
            .then(function (response) {
                Router.push('/login?registered=true');
            })
            .catch(function (error) {
                this.setState({
                    alertMessage: error.response.data.message
                });
            }.bind(this));
    }
    render() {
        return (
            <Layout page="registration">
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            { this.state.alertMessage.length > 0 ?
                            <Alert color="danger">
                                {this.state.alertMessage}
                            </Alert>
                                : ''
                            }
                            <h2 className="text-light bg-dark text-center rounded p-2"> Kayıt Olun </h2>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="text"
                                           name="nameSurname"
                                           value={this.state.nameSurname}
                                           onChange={this.handleInputChange}
                                           id="nameSurname"
                                           placeholder="Adınızı ve soyadınızı girin " />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="email"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.handleInputChange}
                                           id="email"
                                           placeholder="Email adresinizi girin" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.handleInputChange}
                                           id="password"
                                           placeholder="Parola belirleyin" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize="lg"
                                           type="password"
                                           name="passwordConfirm"
                                           value={this.state.passwordConfirm}
                                           onChange={this.handleInputChange}
                                           id="password-confirm"
                                           placeholder="Parolanızı teyit edin" />
                                </FormGroup>

                                <Button color="secondary"
                                        size="lg"
                                        onClick={this.handleRegistration}
                                        block>
                                    Kaydı Tamamla
                                </Button>
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