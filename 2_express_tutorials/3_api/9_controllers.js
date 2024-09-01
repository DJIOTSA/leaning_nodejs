const express = require('express')
const { people } = require('../../data')
const { 
    getPeople, 
    createPerson, 
    login, 
    updatePerson, 
    deletePerson, 
    getPeopleDetails } = require('./controllers/people')

const app = express()

// static assets
app.use(express.static('../methods-public/'))

// parse form data 
// using the express builtin middleware urlencoded
app.use(express.urlencoded({ extended: false }))
// parse json data
// using the express json middleware
app.use(express.json())

// LOGIN
app.post('/login', login)

// get the default http method
app.get('/api/people', getPeople)

// GET PERSON DETAILS
app.get('/api/people/:pk', getPeopleDetails)

// post request
app.post('/api/people', createPerson)

// put method
app.put('/api/people/:pk', updatePerson)

// delete method
app.delete('/api/people/:pk', deletePerson)



app.listen(5000, () => console.log('listening to port 5000.....'))

