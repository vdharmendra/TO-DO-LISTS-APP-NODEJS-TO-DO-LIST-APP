# ✅ TaskNode
Tagline: "A clean and simple To-Do List app built with Node.js, Express, and EJS."

### 📘 Description
TaskNode is a minimal, full-stack To-Do List application built using Node.js, Express.js, EJS, and body-parser. It allows users to add and delete daily tasks through a simple web interface. This project is a great introduction to working with server-side rendering, routing, and form handling in Node.js.

#### 🚀 Features
- Add new tasks using a web form
- Delete tasks with one click
- Renders dynamic content using EJS templates
- Uses Express.js for routing
- Parses incoming form data using body-parser
- Clean and responsive UI (can be styled with CSS/Bootstrap)

#### 📦 Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- body-parser
- HTML/CSS

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
├── package.json
└── README.md



```

#### 🛠️ Usage Example (Core Logic)

``` bash 
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


```
#### 📌 Future Improvements
- Use a database (MongoDB, PostgreSQL) instead of in-memory storage
- Add user authentication (login/register)
- Mark tasks as completed (not just delete)
- Add due dates, priorities, and categories
- REST API version for mobile or SPA support