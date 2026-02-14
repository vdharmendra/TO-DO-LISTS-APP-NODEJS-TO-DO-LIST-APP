# ✅ TaskNest – Multi-List Todo App (Node.js & Express)
Tagline: "A clean and simple To-Do List app built with Node.js, Express, and EJS."

A server-side rendered task management application built using Node.js, Express, EJS, and modular architecture. Supports separate personal and work lists with dynamic date rendering and form handling.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>
- 

<a href="https://to-do-lists-app-nodejs-to-do-list-app.onrender.com/"> Live Demo </a>

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
#### 🛠️ utils/date.js (data.js)
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

#### 📦 Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- body-parser
- JavaScript (ES6)
- Node.js module.exports for modular code

#### 📌 Future Improvements
- Switch from in-memory tasks to database (MongoDB, SQLite, etc.)
- User login & personalized task lists
- Mark tasks as "done" instead of deleting
- REST API version
- Dark mode or theming