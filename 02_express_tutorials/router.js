const express = require("express");
const peopleRouter = require("./routes/people");
const path = require('path');
const app = express();

// setup form and json parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let template = `
<h1>Home page</h1>
`

app.get("/", (req, res)=>{
    return res.status(200).sendFile(path.resolve(__dirname, "./router.html"))
})


// Set up our router
app.use("/api/people", peopleRouter);

// setup the port
app.listen(5000, () => console.log("listening on port 5000......"));


