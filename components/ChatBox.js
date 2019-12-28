import React from "react";
import { Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import 'react-chat-elements/dist/main.css';
import { MessageList, Input, Button } from 'react-chat-elements';
import {serverUrl} from '../api-config';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient(serverUrl);

class ChatBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: []
        };
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleEnter        = this.handleEnter.bind(this);
        this.handleSendClick    = this.handleSendClick.bind(this);
    }
    componentDidMount() {
        this.getMessages();
        if(this.props.saleId){
            socket.on('new message on ' + this.props.saleId, (msg) => {
                if(msg.receiverEmail === this.props.userEmail)
                    this.getMessages();
            });
        }
        let counter = 0;
        if (this.state.messages.length === 0){
            let intervalId;
            intervalId = setInterval(() => {
                this.getMessages();
                if (this.state.messages.length !== 0){
                    clearInterval(intervalId);
                }
            }, 500);
        }
        if (!this.props.saleId){
            let intervalId2;
            intervalId2 = setInterval(() => {
                if(this.props.saleId){
                    socket.on('new message on ' + this.props.saleId, (msg) => {
                        if(msg.receiverEmail === this.props.userEmail)
                            this.getMessages();
                    });
                    clearInterval(intervalId2);
                }
                counter ++;
                console.log(counter);
            }), 1000;
        }
        /*

        */
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        this.setState({
            message: value,
        });
    }
    handleEnter(event) {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }
    handleSendClick(){
        this.sendMessage();
    }
    sendMessage(){
        const url = serverUrl + '/message/new';
        axios.post(url, {
            text: this.state.message,
            receiverEmail: this.props.receiverEmail,
            saleId: this.props.saleId
        },{
            headers:{
                authorization: this.props.userToken
            }
        }).then((response) => {
            console.log(response.data);
            this.setState({
                message: ''
            });
            socket.emit('new message', {
                relatedSale: this.props.saleId,
                receiverEmail: this.props.receiverEmail
            });
            this.refs.message.clear();
            this.getMessages();
        }).catch((error) => {
            throw error;
        });
    }
    getMessages(){
        console.log("Sale ID: "+this.props.saleId);
        console.log("Token: "+this.props.userToken);
        const url = serverUrl + '/messages/' + this.props.saleId;
        axios.post(url, {}, {
            headers:{
                authorization: this.props.userToken
            }
        }).then((response) => {
            this.setState({
                messages: response.data.messages
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        let dataSource = [];
        let messages = this.state.messages;
        let i;
        for (i in messages){
            dataSource.push({
                position: messages[i].receiverEmail === this.props.receiverEmail ? 'right' : 'left',
                type: 'text',
                className: 'mb-2',
                text: messages[i].messageText,
                date: messages[i].createdAt
            });
        }
        return (
            <div>
                <Card>
                    <CardHeader className="bg-dark text-white">
                        {this.props.interlocutor}
                        <span className="float-right"> {this.props.salePrice}₺ </span>
                    </CardHeader>
                    <CardBody style={{minHeight: '400px'}}>
                        <MessageList
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={dataSource} />
                    </CardBody>
                    <CardFooter className="bg-light">
                        <Input
                            placeholder="Mesajınız..."
                            className="pl-2"
                            multiline={false}
                            ref="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleEnter}
                            rightButtons={
                                <Button
                                    color='white'
                                    className='bg-dark btn-lg pl-3 pr-3'
                                    onClick={this.handleSendClick}
                                    text={<FontAwesomeIcon icon={faPaperPlane} width="16" />} />
                            }/>
                    </CardFooter>
                </Card>

            </div>
        );
    }
}

export default ChatBox;