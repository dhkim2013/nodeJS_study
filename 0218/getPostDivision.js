/**
 * Created by almond on 16. 2. 18..
 */
var http = require('http');

http.createServer(function(req, res) {
    if(req.method == 'GET')
    console.log('Get');
    else if(req.method == 'POST')
    console.log('Post');
}).listen(3000);