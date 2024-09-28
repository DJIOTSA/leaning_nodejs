const express = require("express");
const peopleRouter = require("./routes/people");
<<<<<<< HEAD:02_express_tutorials/router.js
const path = require('path');
=======
>>>>>>> 3b06224930fecc4f6bbb2d8a53dcbf10772deb2a:2_express_tutorials/router.js
const app = express();

// setup form and json parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let template = `
<h1>Home page</h1>
<<<<<<< HEAD:02_express_tutorials/router.js
`

app.get("/", (req, res)=>{
    return res.status(200).sendFile(path.resolve(__dirname, "./router.html"))
})
=======
<h3> Endpoints list</h3>
<ul>
    <li><a href="http://localhost:5000/api/people">Get People List</a></li>
    <li><a href="http://localhost:5000/api/people/1">Get User 1</a></li>
    <li><a href="http://localhost:5000/api/people/1/update">Update User 1</a></li>
    <li><a href="http://localhost:5000/api/people/create">Create User 6</a></li>
    <li><a href="http://localhost:5000/api/people/1/delete">Delete User 1</a></li>
</ul>`
>>>>>>> 3b06224930fecc4f6bbb2d8a53dcbf10772deb2a:2_express_tutorials/router.js


// Set up our router
app.use("/api/people", peopleRouter);

// setup the port
app.listen(5000, () => console.log("listening on port 5000......"));


