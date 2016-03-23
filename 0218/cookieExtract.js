/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');

http.createServer(function(req, res) {
    var cookie = req.headers.cookie;

    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['name = mylko', 'region = seoul']
    });
    res.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(3000);