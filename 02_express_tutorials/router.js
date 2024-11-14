const express = require("express");
const peopleRouter = require("./routes/people");
const app = express();

// setup form and json parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let template = `
<h1>Home page</h1>
<h3> Endpoints list</h3>
<ul>
    <li><a href="http://localhost:5000/api/people">Get People List</a></li>
    <li><a href="http://localhost:5000/api/people/1">Get User 1</a></li>
    <li><a href="http://localhost:5000/api/people/1/update">Update User 1</a></li>
    <li><a href="http://localhost:5000/api/people/create">Create User 6</a></li>
    <li><a href="http://localhost:5000/api/people/1/delete">Delete User 1</a></li>
</ul>`


// Set up our router
app.use("/api/people", peopleRouter);

// setup the port
app.listen(5000, () => console.log("listening on port 5000......"));


