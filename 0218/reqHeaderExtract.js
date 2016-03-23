/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res) {
    var agent = req.header('User-Agent');

    console.log(req.headers);
    console.log(agent);
})

http.createServer(app).listen(3000);