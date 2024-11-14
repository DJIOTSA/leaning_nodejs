const express = require('express');

// setup router
const router = express.Router()

const { people } = require('../../../data')

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,
    getPeopleDetails } = require('../controllers/people')

// since we have set the url(/api.people) ant the level of 8_routers.js we don't need it here

// // method 1
// router.get('/', getPeople) // get the default http method
// router.get('/:pk', getPeopleDetails) // GET PERSON DETAILS
// router.post('/', createPerson) // post request
// router.put('/:pk', updatePerson) // put method
// router.delete('/:pk', deletePerson) // delete method

// method 2
router.route('/')
    .get(getPeople)
    .post(createPerson);

router.route('/:pk')
    .put(updatePerson)
    .delete(deletePerson)
    .get(getPeopleDetails)


module.exports = router