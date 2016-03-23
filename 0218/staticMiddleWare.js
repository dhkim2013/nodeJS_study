/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan());
app.use(express.static(__dirname + '/img'));
app.use(function(req, res) {
    console.log('three');
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end('<img src="o.jpg" width="50%" />');
})

http.createServer(app).listen(3000);