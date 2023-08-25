const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, "content-type", "text/html");
  if (request.method === "GET") {
    response.end("GET");
  }
  if (request.method === "POST") {
    response.end("POST");
  }
  if (request.method === "PUT") {
    response.end("PUT");
  }
  if (request.method === "DELETE") {
    response.end("DELETE");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
