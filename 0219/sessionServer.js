/**
 * Created by almond on 16. 2. 19..
 */
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var session = require('express-session');

app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret : "secret key", key : 'fundoong', cookie : {maxAge : 60 * 1000}}));

app.get('/login', function(req, res) {
    fs.readFile('index.html', function(error, data) {
        res.send(data.toString());
    })
})

app.post('/login', function(req, res) {
    var post = req.body;
    if(post.user === 'fundoong' && post.password === '1234') {
        req.session.user_id = post.user;
        res.redirect('/my_secret_page');
    }
    else {
        res.send('아이디/패스워드 둘 중 하나가 틀렸네요.');
    }
})

app.get('/logout', function(req, res) {
    delete req.session.user_id;
    res.redirect('/login');
})

app.get('/my_secret_page', checkAuth, function(req, res) {
    res.send("시크릿 페이지 입니다.");
})

http.createServer(app).listen(3000);

function checkAuth(req, res, next) {
    if(!req.session.user_id) {
        res.send('로그인 하세요.');
    }
    else {
        next();
    }
}