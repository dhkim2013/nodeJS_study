/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var query = url.parse(req.url).query;

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(JSON.stringify(query));
}).listen(3000);