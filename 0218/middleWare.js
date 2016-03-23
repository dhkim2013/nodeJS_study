/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    req.number = 52;
    res.number = 273;
    res.q = 555;
    next();
})

app.use(function(req, res, next) {
    res.send('<h1>' + res.number + ' : ' + req.number + ' : ' + res.q + '</h1>');
})

http.createServer(app).listen(3000);