/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan());
app.use(express.static(__dirname + '/test'));
app.get('/a', function(req, res) {
    res.send('<a href = "/b">GO to B</a>');
})
app.get('/b', function(req, res) {
    res.send('<a href = "/a">GO to A</a>');
})

http.createServer(app).listen(3000);