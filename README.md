# ✅ TaskNode
Tagline: "A clean and simple To-Do List app built with Node.js, Express, and EJS."

## 📘 Description
TaskNode is a minimal, full-stack To-Do List application built using Node.js, Express.js, EJS, and body-parser. It allows users to add and delete daily tasks through a simple web interface. This project is ideal for learning routing, form handling, template rendering, and modular JavaScript.

#### Features
- Add new tasks using a web form
- Delete tasks with one click
- Display current date using shared utility function
- Modular architecture using Node.js module.exports
- Renders dynamic content using EJS templates
- Clean and responsive UI (optional CSS/Bootstrap)

#### 🆕 New Feature: Modular Code with module.exports

To make the code cleaner and reusable, TaskNode uses module.exports to move utility logic (like getting the current date or formatting) into a separate file.

#### 📁 Folder Structure
``` bash 
TaskNode/
├── node_modules/
├── views/
│   ├── lists.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   └── styles.css
├── app.js
├── data.js
├── package.json
└── README.md



```

#### 🛠️ Usage Example (Core Logic)

``` bash 
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

// # Chapter: 6
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
    // # Chapter: 6
    // PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
    res.render("todolists", {listTitle: "Work list", newlistItems: workListItems});
});

app.listen(3000, function(){
    console.log("Server Up and Running 3000");
});

```
#### 🛠️ Usage Example (data.js)
``` bash

// # Chapter: 6
// PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
exports.getDate = function(){
    const today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    return today.toLocaleDateString('en-US', options);
};

exports.getDay = function(){
    const today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    return today.getDay();
}


```

#### 📌 Future Improvements
- Use a database (MongoDB, PostgreSQL) instead of in-memory storage
- Add user authentication (login/register)
- Mark tasks as completed (not just delete)
- Add due dates, priorities, and categories
- REST API version for mobile or SPA support