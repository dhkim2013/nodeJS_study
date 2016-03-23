/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan());

app.get('/:page/:id', function(req, res) {
    var t = req.param('id');
    res.send('<h1>' + t + ' Page</h1>')
})

http.createServer(app).listen(3000);