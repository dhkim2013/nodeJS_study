/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res) {
    var name = req.param('name');
    var region = req.param('region');

    res.send('<h1>' + name + '-' + region + '</h1>');
})

http.createServer(app).listen(3000)