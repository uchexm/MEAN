const express = require("express");
const fs = require("fs");
const dir = "./public/";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  render(res, "index.html");
});

app.get("/about", (req, res) => {
  render(res, "about.html");
});

app.get("/contact", (req, res) => {
  render(res, "contact.html");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const render = (res, file) => {
  fs.readFile(dir + file, (error, data) => {
    if (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>404 File Not Found</h1>");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(data);
  });
};
