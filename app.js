const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date");

const items = ["Buy food", "Cook Food", "Eat Food"];
//const workItems = [];

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + 'public'));

app.get("/", function(req, res) {

    const day = date.getDate();

    res.render("index", { kindOfDay: day, newListItem: items });
});

app.post("/", function(req, res) {
    const item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");

});