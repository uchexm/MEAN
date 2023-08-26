const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, "content-type", "text/html");

  if (request.url === "/get") {
    if (request.method === "GET") {
      response.end("GET");
    }
  } else if (request.url === "/post") {
    if (request.method === "POST") {
      response.end("POST");
    }
  } else if (request.url === "/put") {
    if (request.method === "PUT") {
      response.end("PUT");
    }
  } else if (request.url === "/delete") {
    if (request.method === "DELETE") {
      response.end("DELETE");
    }
  } else {
    response.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
