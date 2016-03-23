/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(302, {'Location' : 'http://www.naver.com'});
    res.end();
}).listen(3000);
