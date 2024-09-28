/*
Here we are going to create all the functions of our
people router
*/

const { result } = require("lodash");
const { people } = require("../data");

// get all the people
const getPeople = (req, res) => {
  return res.status(200).json({
    SUCCESSl: true,
    results: people,
  });
};

// get people details
const getPeopleDetails = (req, res) => {
  const { pk } = req.params;

  let id = Number(pk);

  if (isNaN(id)) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "Invalid pk parameter value. The value must be an integer",
    });
  }

  //   let find the the person with id = Number(id)
  const person = people.find((person) => {
    if (person.id == id) {
      return person;
    }
  });

  //   in case the person does not exists
  if (!person) {
    return res.status(200).json({
      SUCCESS: true,
      msg: `User with pk equal ${pk} not found!`,
    });
  }

  let x = []
  x.push(person)



  res.status(200).json(
    {
      SUCCESSl: true,
      results: x,
    });
};

// create a people
const createPeople = (req, res) => {
  const { name } = req.body;
  //   check if the two fields are provided
  if (!name) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "You must provide the person name!",
    });
  }

  //   add the new user to the list
  let peopleList = [...people];
  peopleList.push({
    id: peopleList.length + 1,
    name: name,
  });

  res.status(201).json({
    SUCCESS: true,
    msg: "Person created successfully!",
    oldList: people,
    newList: peopleList,
  });
};

// Update person
const updatePeople = (req, res) => {
  const { pk } = req.params;
  const { name } = req.body;

  if (!pk || !name) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "You must provide the pk(parameter) and the name(body)!",
    });
  }

  //   validate pk type
  let id = Number(pk);
  if (isNaN(id)) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "Invalid pk parameter value. The value must be an integer",
    });
  }

  //   let find the the person with id = Number(id)
  const person = people.find((person) => {
    if (person.id == id) {
      return person;
    }
  });

  //   in case the person does not exists
  if (!person) {
    return res.status(200).json({
      SUCCESS: false,
      msg: `User with pk equal ${pk} not found!`,
    });
  }

  //   change the name of the person
  people.map((person) => {
    if (person.id == id) {
      person.name = name;
    }
  });

  res.status(201).json({
    SUCCESS: true,
    msg: "User name have been changed",
    results: people,
  });
};

// delete people
const deletePeople = (req, res) => {
  const { pk } = req.params;
  if (!pk) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "You must provide the pk(parameter)!",
    });
  }

  //   validate pk type
  let id = Number(pk);
  if (isNaN(id)) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "Invalid pk parameter value. The value must be an integer",
    });
  }

  //   let find the the person with id = Number(id)
  const person = people.find((person) => {
    if (person.id == id) {
      return person;
    }
  });

  //   in case the person does not exists
  if (!person) {
    return res.status(200).json({
      SUCCESS: false,
      msg: `User with pk equal ${pk} not found!`,
    });
  }

  // let remove the user
  const newList = people.filter((person)=>{
    if (person.id != id){
        return person
    }
  })

  res.status(200).json({
    SUCCESS: true,
    msg: "User have been removed!",
    newList: newList
  })
};

module.exports = {
    getPeople,
    getPeopleDetails,
    createPeople,
    updatePeople,
    deletePeople
}
