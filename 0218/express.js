/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>HELLO Nodejs</h1>');
});

http.createServer(app).listen(3000)