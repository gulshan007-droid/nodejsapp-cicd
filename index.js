const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.send("Hello World tyyuuui");
});
server.listen(4200, () => {
  console.log("Server running on port 4200");
});
