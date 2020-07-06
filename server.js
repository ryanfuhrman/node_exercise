const express = require("express");
const path = require("path");

const complements = [
  "You are more fun than anyone or anything I know, including bubble wrap.",
  "You are the most perfect you there is.",
  "Your outlook on life is amazing.",
  "You are one of the strongest people I know.",
  "You look great today.",
  "You made this!",
  "You've learned a lot of things, and that's pretty hard to do.",
  "You make a bigger impact than you realize.",
];

const insults = [
  "You know, you are a classic example of the inverse ratio between the size of the mouth and the size of the brain.",
  "If you spend word for word with me, I shall make your wit bankrupt.",
  "You clinking, clanking, clattering collection of caliginous junk!",
  "You are about one bit short of a byte.",
  "I'll explain and I'll use small words so that you'll be sure to understand, you warthog-faced buffoon.",
  "I fart in your general direction. Your mother was a hamster and your father smelt of elderberries.",
  "You are a sad strange little man, and you have my pity.",
  "To call you stupid would be an insult to stupid people! I've known sheep that could outwit you. I've worn dresses with higher IQs.",
];

function getRandomComplement() {
  const rand = Math.floor(Math.random() * complements.length);
  return complements[rand];
}

function getRandomInsult() {
  const rand = Math.floor(Math.random() * insults.length);
  return insults[rand];
}

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function (req, res) {
  res
    .json({
      complement: getRandomComplement(),
    })
    .end();
});

app.get("/insult", function (req, res) {
  res
    .json({
      insult: getRandomInsult(),
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(1234);
console.log("listening on http://localhost:1234");
