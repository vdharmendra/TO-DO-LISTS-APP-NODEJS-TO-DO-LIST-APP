// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

// UNDERSTANDING NODE MODULE EXPORTS
// how to pass function and data between files
const data = require(__dirname+'/data.js');

const app = express();

var items = ["buy food", "cook food", "eat food"];
var workListItems = [];


app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static("public"));
app.set("view engine", 'ejs');


app.get("/", function(req, res){
    // CHAPTER: 6
    console.log(__dirname+'/data.js');
    console.log(data.getDate() +'\n'+ data.getDay());
    
    var day = data.getDate()
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