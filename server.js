const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/script.js") {
    fs.readFile("script.js", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/media") {
    fs.writeFile("nct.txt", "to the world this is nct", () => {
      console.log("neo got my back");
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "file written" }));
    res.end();
    /*
    const fileType = req.headers["content-type"].split("/")[1];
    const writeStream = fs.createWriteStream(`test.${fileType}`);
    req.pipe(writeStream);

    res.end(); */
  }
});

server.listen(3000, () => {
  console.log("server is running");
});
