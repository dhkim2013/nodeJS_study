/**
 * Created by almond on 16. 2. 19..
 */
var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.use(bodyParser());
app.use(cookieParser());

app.get('/', function(req, res) {
    if(req.cookies.auth) {
        res.send("welcome to Nodejs");
    }
    else {
        res.redirect('login');
    }
})

app.get('/login', function(req, res) {
    fs.readFile('login.html', function(error, data) {
        res.send(data.toString());
    })
})

app.post('/login', function(req, res) {
    var login = req.param('login');
    var password = req.param('password');

    console.log(login.password);
    console.log(req.body);

    if(login == 'askey' && password == '1111') {
        res.cookie('auth', true);
        res.redirect('/');
    }
    else {
        res.redirect('/login');
        console.log('login fail');
    }
})

http.createServer(app).listen(3000);