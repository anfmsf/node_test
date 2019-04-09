/**
 * Created by fequebal on 4/3/19.
 */

var url = require('url');
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data){
    if(err) {
        res.writeHead(404, {'Content-Type': 'Text/HTML'});
        return res.end("404 Not Found");
    }

    res.writeHead(200, {'Content-Type': 'Text/HTML'});
    res.write(data);
    return res.end();
    });

}).listen(8080);
