/**
 * Created by almond on 16. 2. 19..
 */
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.get('/getCookie', function(req, res) {
    res.send(req.cookies);
})

app.get('/setCookie', function(req, res) {
    res.cookie('string', 'cookie');
    res.cookie('json', {
        name : 'cookie',
        property : 'delicious'
    })

    res.redirect('/getCookie');
})

http.createServer(app).listen(3000);