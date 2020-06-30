const express = require("express");
const path = require("path");

const statements = [
  "Way to go, ya dingus!",
  "That dress looks nice on you!",
  "You're really putting in the work!",
  "Dingus!",
  "I'm really proud of you!",
  "You made this!",
  "You've learned a lot of things, and that's pretty hard to do",
  "You've learned a lot of things, but clearly not enough, ya dingus",
];

function getRandomStatement() {
  const rand = Math.floor(Math.random() * statements.length);
  return statements[rand];
}

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/statement", function (req, res) {
  res
    .json({
      statement: getRandomStatement(),
    })
    .end();
});

app.get("/dingus", function (req, res) {
  res.end("This is the dingus page, ya homepage.");
});

app.use("/public", express.static("./public"));

app.listen(1234);
console.log("listening on http://localhost:1234");
