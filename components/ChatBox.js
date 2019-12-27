import React from "react";
import { Card, CardHeader, CardBody, CardFooter} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageList, Input, Button } from 'react-chat-elements';


class ChatBox extends React.Component{
    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="bg-dark text-white">
                        Gamze Gülbahar <span className="float-right">500₺</span>
                    </CardHeader>
                    <CardBody style={{minHeight: '400px'}}>
                        <MessageList
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={[
                                {
                                    position: 'right',
                                    type: 'text',
                                    className: 'mb-2',
                                    text: 'Merhaba ürünü ne zaman alabilirsiniz? ',
                                    date: new Date() - 100000,
                                },
                                {
                                    position: 'left',
                                    type: 'text',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                    date: new Date() - 10000,
                                },
                            ]} />
                    </CardBody>
                    <CardFooter className="bg-light">
                        <Input
                            placeholder="Mesajınız..."
                            className="pl-2"
                            multiline={false}
                            rightButtons={
                                <Button
                                    color='white'
                                    className='bg-dark col-2'
                                    text={<FontAwesomeIcon icon={faPaperPlane} width="16" />} />
                            }/>
                    </CardFooter>
                </Card>

            </div>
        );
    }
}

export default ChatBox;