/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res) {
    var output = [];
    for(var i = 0; i < 3; i++) {
        output.push( {
            count : i,
            name : 'name-'+i
        })
    }
    res.send(output);
})

http.createServer(app).listen(3000);