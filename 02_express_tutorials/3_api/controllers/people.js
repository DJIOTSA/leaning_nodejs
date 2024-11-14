const { people } = require('../../data')

// GET
const getPeople = (req, res) => {
    res.status(200).json({
        status: "SUCCESS",
        results: people
    })
}

// DETAIL
const getPeopleDetails = (req, res) => {
    const { pk } = req.params
    if (isNaN(Number(pk))) {
        return res.status(204).json({ SUCCESS: false, msg: "Invalid Person." })
    }
    const person = people.find((person) => person.id == pk)
    if (!person) {
        return res.status(200).json({ SUCCESS: false, msg: "Person not found!" })
    }
    res.status(200).json({ SUCCESS: true, details: person })
}

// POST
const createPerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ SUCCESS: false, msg: "please provide name value!" })
    }
    // 201 status for successful post request
    res.status(201).json({ SUCCESS: true, person: name })
}

// PUT
const updatePerson = (req, res) => {
    const { pk } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id == pk)

    if (!person) {
        return res.status(404).json({ SUCCESS: false, msg: "Person no found!" })
    }

    people.map((person) => {
        if (person.id == pk) {
            person.name = name
        }
    })

    res.status(200).json({ SUCCESS: true, results: people })
}

// DELETE
const deletePerson = (req, res) => {
    const { pk } = req.params

    const person = people.find((person) => person.id == pk)

    if (!person) {
        return res.status(404).json({ SUCCESS: false, msg: "person no found!" })
    }
    const newPersons = people.filter((person) => person.id != pk)
    res.status(200).json({ "SUCCESS": true, results: newPersons })
}

// login
const login = (req, res) => {
    const { name } = req.body;
    console.log(req.body)
    if (name == "") {
        return res.status(404).send('<pre> Please provide your credentials!</pre>')
    }
    res.status(200).send(`<h1>Hi ${name}</h1>`)
}

module.exports = { createPerson, updatePerson, deletePerson, getPeople, login, getPeopleDetails }