/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');

http.createServer(function(req, res) {
    var date = new Date();
    date.setDate(date.getDate() + 7);
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : [
            'breakfast = toast', 'Expires = ' + date.toUTCString(), 'dinner = chicken'
        ]
    })
    res.end('<h1>' + req.headers.cookie + '</h1>');
}).listen(3001);
