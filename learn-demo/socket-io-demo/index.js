//use node http server
//url: https://socket.io/get-started/chat/

var app = require('express')();
var http = require("http").createServer(app);
var io = require('socket.io')(http);

app.get("/", function (req, res) {
    // res.send("<h1>hello world</h1>")
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', function (socket) {

    console.log('an user connected');
    // -- get message
    //socket.on() explain connect locate-connection-server 
    socket.on('chat messages', function (msg) {
        // console.log('message: ' + msg);
        //io.emit() explain all connection server
        io.emit('chat messages', msg);
    });

    //send message to locate-connection-server all connecter
    // socket.on("", function(msg){
    // io.emit("",msg);
    // })


    // -- disconnection chart
    // socket.on('disconnect', function(){
    //     console.log('user disconnected');
    //   });

    // socket.broadcast.emit('hi');
})

http.listen(3000, function () {
    console.log('listening on * :3000');
});

