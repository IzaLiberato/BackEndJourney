var http = require('http');

var server = http.createServer(function(req, res){
    console.log('A requisição foi feita: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('LAPISCO');
});

server.listen(3000, '127.0.0.1');
console.log('Servidor rodando em http://127.0.0.1:3000/');
