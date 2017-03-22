const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var compliment = require("./compliments.js")
var color = require("./colors.js")

// app.get("/", (req,res) => {
//   res.send(compliment())
// })

app.get("/", (req,res) => {
  res.render("index", {color: color(), compliment: compliment()})
})


app.listen(4000, () => {
  console.log("listening on port 4000")
})
