/**
 * Created by almond on 16. 2. 19..
 */
var fs = require('fs');
var http = require('http');
var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var app = express();

app.use(cookieParser());
app.use(bodyParser.json({
    limit : "10mb"
}));
app.use(multipart());

app.get('/', function(req, res) {
    fs.readFile('test.html', function(error, data) {
        res.send(data.toString());
    })
})

app.post('/', function(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.redirect('/');
})

http.createServer(app).listen(3000);