/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;

    if(pathname == '/') {
        fs.readFile('\n\nindex.html', function(error, data) {
            res.writeHead(200, {'Conten-Type' : 'text/html'});
            res.end(data);
        })
    }
    else if(pathname == '/OtherPage') {
        fs.readFile('otherpage.html', function(error, data) {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        })
    }
}).listen(3000);