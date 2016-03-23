/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'ContentTpye' : 'text/html'});
    res.end('<h1>Hello World</h1>');
}).listen(3000);
