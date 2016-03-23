/**
 * Created by almond on 16. 2. 22..
 */
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (req, res) {
    fs.readFile('socketClient.html', function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    })
}).listen(3000);

var io = socketio.listen(server);

io.sockets.on('connection', function(socket) {
    socket.on('echo', function(data) {
            console.log('Client Send Data : ', data);
            socket.broadcast.emit('smart', data);
        }
    )
})