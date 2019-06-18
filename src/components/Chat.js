import React, { Component } from 'react'
// need to import this socket dependency for client side
import io from "socket.io-client";
import './Chat.css';

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        // setup a socket to listen to the same port as the backend server
        this.socket = io('localhost:8080');

        //'send message' submission function
        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({ message: '' });
        }

        // receive the emitted message from the server and then render it on the client side
        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };

    }


    render() {
        return (
            <div className="container">
                <div className="chat_component">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} className="form-control" />
                                <br />
                                <input type="text" placeholder="Message" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} className="form-control" />
                                <br />
                                <button className="btn btn-primary form-control" onClick={this.sendMessage} >Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;