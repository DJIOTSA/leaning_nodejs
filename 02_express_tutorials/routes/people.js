/*
    This provide us with all the people api request
*/

const express = require("express");
const {
  getPeople,
  getPeopleDetails,
  createPeople,
  updatePeople,
  deletePeople,
} = require("../controlers/people");

const router = express.Router();

// get people list
router.route("/")
.get(getPeople)

// create person object
router.route("/create")
.post(createPeople)

// update user
router.route("/:pk/update")
.put(updatePeople)

// retrieve a person
router.route("/:pk")
.get(getPeopleDetails)


// delete a person
router.route("/:pk/delete")
.delete(deletePeople)

module.exports =  router