// use node http server
//url: https://socket.io/docs/#Using-with-Node-http-server
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8888);

function handler(req, res) {

    //callback error function
    fs.readFile(__dirname + '/index.html',

        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('error loading index.html');
            }
            res.writeHead(200)
            res.end(data);
        });
}

io.on('connection', function (socket) {
    console.info('socket io connection success')
    socket.emit('news', { hello: 'world' });

    socket.on('my other event', function (data) {
        console.info(data);
    });
});