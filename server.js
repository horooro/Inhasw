'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/') {
        // 사용자에게 보여줄 HTML 파일을 읽어와 응답으로 전송합니다.
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // '/' 외의 다른 URL로의 요청에 대한 처리를 여기에 추가할 수 있습니다.
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(port);

console.log('Server running at http://localhost:' + port + '/');

