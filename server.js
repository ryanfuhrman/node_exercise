const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.end("This is the homepage, ya dingus.");
});

app.get("/dingus", function (req, res) {
  res.end("This is the dingus page, ya homepage.");
});

app.listen(1234);
console.log("listening on http://localhost:1234");
