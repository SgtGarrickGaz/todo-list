const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

var item = "";
var items = [];
app.get("/", function (req, res) {
    var today = new Date();


    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString('en-US', options);

    res.render('lists', {
        kindOfDay: day,
        newItem: items
    });
});

app.post("/", function (req, res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log("Server running");
})