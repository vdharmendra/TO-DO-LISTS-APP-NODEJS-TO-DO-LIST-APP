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
├── public/
│   └── styles.css
├── app.js
├── package.json
└── README.md



```

#### 🛠️ Usage Example (Core Logic)

``` bash 
 console.log(req.body.list);
    var item = req.body.addNewItem;
    if(req.body.list === "Work list"){
        workListItems.push(item);
        res.redirect('/work');
        
    }else{
        items.push(item);
        res.redirect('/');
    }

```
#### 📌 Future Improvements
- Use a database (MongoDB, PostgreSQL) instead of in-memory storage
- Add user authentication (login/register)
- Mark tasks as completed (not just delete)
- Add due dates, priorities, and categories
- REST API version for mobile or SPA support