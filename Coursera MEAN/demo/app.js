const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, "content-type", "text/html");
  // response.write("<h1>Welcome to Node.js!</h1>");
  response.end("<h1>Welcome to Node.Js!</h1>");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});

const server2 = http.createServer((request, response) => {
  response.writeHead(200, "content-type", "text/html");
  // response.write("<h1>Welcome to Node.js!</h1>");
  response.end("<h2>Welcome to Node.Js2!</h2>");
});

server2.listen(4000, () => {
  console.log("http://localhost:4000");
});
