<<<<<<< HEAD
=======
<<<<<<< HEAD:02_express_tutorials/revision.js
const express = require("express");
const { people } = require("../data");

const app = express();

// setup form parser and json parser middlewares
app.use([express.urlencoded({ extended: false }), express.json()]);

// setup the static files
app.use(express.static("./methods-public"));

// home page get request
app.get("");

// get method: people list
app.get("/api/people", (req, res) => {
  res.status(200).json({
    SUCCESS: true,
    results: people,
  });
});

// form post request
app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(405)
      .json({ SUCCESS: false, MSG: "provide the name and the password" });
  }

  let list = [...people];

  const newPerson = {
    id: people.length + 1,
    name: name,
  };

  list.push(newPerson);
  res.status(201).json({
    SUCCESS: true,
    people: list,
  });
});

// javascript post request
app.post("/api/people", (req, res) => {
  const { name, password } = req.body;
  if (!name ) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "provide the name value",
    });
  }
  res.status(201).json({
    SUCCESS: true,
    person: name,
    password: password,
  });
});

// setup the port
app.listen(5000, () => console.log("Listening to to port 5000...."));
=======
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
const express = require('express')
const { products } = require('./data')
const { notifications } = require('./notifications')
const { isNumber } = require('lodash')


// start
const app = express()


// get notifications
app.get("/api/notifications", (req, res) => {
    const list = notifications.map((notification) => {
        const { url, message, status, user, created_at } = notification
        return { url, message, status, user, created_at }
    })
    let x = list.length

    const data = {
        SUCCESS: true,
        TOTAL: x,
        results: list,
    }
    res.status(200).json(notifications)
})


// use dynamic parameter to access details of 
app.get("/api/notifications/:pk", (req, res) => {
    const { pk } = req.params;
    let id = Number(pk)
    if (!isNumber(pk)){
        res.status(405).json({
            SUCCESS: false,
            details: "Invalid parameter"
        })
    }
    
    const notification = notifications.find()
})


// get all products
app.get("/", (req, res) => {
    const list = products.map((item) => {
        const { image, name, price } = item;
        return { image, name, price };
    })
    res.status(200).json(list)
})


// listen
<<<<<<< HEAD
app.listen(5000, () => console.log("testing api with define json product file...."))
=======
app.listen(5000, () => console.log("testing api with define json product file...."))
>>>>>>> 3b06224930fecc4f6bbb2d8a53dcbf10772deb2a:2_express_tutorials/revision.js
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
