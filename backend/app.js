// nodejs backend app file
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send("Hello world of node");
});

io.on('connection', function (socket) {
    console.log(socket.id + " has connected...");
    // getting a message from a socket/user, and then emitting it to everyone connected
    socket.on('SEND_MESSAGE', function (data) {
        console.log(data);
        io.emit('RECEIVE_MESSAGE', data);
    })

    // handling of the disconnect of a socket/user
    socket.on("disconnect", () => {
        console.log(socket.id + " Has disconnected...")
    })
});

http.listen(8080, function () {
    console.log('listening on *:8080');
});