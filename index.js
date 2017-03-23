const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var compliment = require("./compliments.js")
var color = require("./colors.js")
var textcolor = require("./textcolors.js")

app.get("/", (req,res) => {
  res.render("index", {color: color(), textcolor: textcolor(), compliment: compliment()})
})

app.listen(4000, () => {
  console.log("...psssst....it's listening to you on port 4000...")
})
