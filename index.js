const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World ghhh");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(4200, () => {
  console.log("Server running on port 4200");
});
