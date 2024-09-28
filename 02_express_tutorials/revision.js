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
