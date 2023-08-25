const { error } = require("console");
const http = require("http");
const data = JSON.stringify({
  title: "mean stack",
});

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "PUT", //PUT DELETE POST
  headers: {
    "Content-type": "application/json",
    "Content-Length": data.length,
  },
};
const request = http.request(options, (response) => {
  response.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
