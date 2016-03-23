/**
 * Created by almond on 16. 2. 22..
 */
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');
var express = require('express');

var app = express();

var server;

app.use(function(req, res) {
    fs.readFile('client.html', function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    })
})

server = http.createServer(app).listen(3000);

var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    socket.on('message', function(data) {
        io.sockets.emit('message', data);
    })
})