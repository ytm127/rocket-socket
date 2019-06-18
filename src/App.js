// react frontend app file
import React from 'react';
// import io from "socket.io-client";
import Chat from './components/Chat';
// import the corresponding stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Rocket Socket</h1>
        <i className="fab fa-rocketchat fa-4x"></i>
        <hr />
        <p id="desc">This is a real-time chat application built using Node.js, Express, Socket.io, and React!</p>
        <p>Made by <a href="https://github.com/ytm127">Thomas Morita</a></p>
      </div>
      <Chat />
    </div>
  );
}

export default App;
