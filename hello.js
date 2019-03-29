var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Travis!\n');
}).listen(4000);
console.log(new Date().toString() + ' Server running at http://localhost:4000/');
