// react frontend app file
import React from 'react';
// import io from "socket.io-client";
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <div className="jumbotron"><h1>Rocket Socket</h1></div>
      <Chat />
    </div>
  );
}

export default App;
