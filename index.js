const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


let compliments = [
  "Your smile is contagious.",
  "You look great today.",
  "You're a smart cookie.",
  "I bet you make babies smile.",
  "I like your style.",
  "You have the best laugh.",
  "I appreciate you.",
  "You're strong.",
  "Your perspective is refreshing.",
  "You should be proud of yourself.",
  "You're more helpful than you realize.",
  "On a scale from 1 to 10, you're an 11.",
  "You are making a difference.",
  "How is it that you always look great, even in sweatpants?"
]

let colors = [
  "#ff0000",
  "#ff4000",
  "#ff8000",
  "#ffbf00",
  "#ffff00",
  "#bfff00",
  "#80ff00",
  "#40ff00",
  "#00ff00",
  "#00ff40",
  "#00ff80",
  "#00ffbf",
  "#00ffff",
  "#00bfff",
  "#0080ff",
  "#0040ff",
  "#0000ff",
  "#4000ff",
  "#8000ff",
  "#bf00ff",
  "#ff00ff",
  "#ff00bf",
  "#ff0080",
  "#ff0040"
]

app.listen(4000, () => {
  console.log("listening on port 4000")
})
