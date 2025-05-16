// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["buy food", "cook food", "eat food"];
var workListItems = [];


app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static("public"));
app.set("view engine", 'ejs');


app.get("/", function(req, res){
    // # Chapter: 5
    // PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
    var today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    var day = today.toLocaleDateString('en-US', options);
    res.render("todolists", {listTitle: day, newlistItems: items});


});

// # Chapter: 5
// POST REQ
app.post("/", function(req, res){

    console.log(req.body.list);
    var item = req.body.addNewItem;
    if(req.body.list === "Work list"){
        workListItems.push(item);
        res.redirect('/work');
        
    }else{
        items.push(item);
        res.redirect('/');
    }
   
});

app.get("/work", function(req, res){
    // # Chapter: 5
    // PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
    res.render("todolists", {listTitle: "Work list", newlistItems: workListItems});


});

app.listen(3000, function(){
    console.log("Server Up and Running 3000");
});