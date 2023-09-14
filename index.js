const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("welcome to the server");
  } else if (req.url == "/index") {
    res.end("<h1>welcome to the index page</h1>");
  } else if (req.url == "/login") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }
      res.end(data);
    });
  } else if (req.url == "/sign up") {
    res.end("welcome to the login page");
  } else if (req.url == "/about") {
    res.end("welcome to the about page");
  }
});

server.listen(8091, () => {
  console.log("starting server a port of 8091");
});
