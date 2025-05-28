const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, Azure DevOps!');
};

const server = http.createServer(requestListener);
server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
