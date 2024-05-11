'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/') {
        // ����ڿ��� ������ HTML ������ �о�� �������� �����մϴ�.
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
        // '/' ���� �ٸ� URL���� ��û�� ���� ó���� ���⿡ �߰��� �� �ֽ��ϴ�.
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(port);

console.log('Server running at http://localhost:' + port + '/');

