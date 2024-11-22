const express = require('express')
const app = express()
const path = require('path')
const htmlTemplate = require('./template')
var {people} = require('../data')

// setting static
app.use(express.static('../methods-public'))
// setting up form data parser
app.use(express.urlencoded({ extended: false }))
// setting up json parser
app.use(express.json())
// setup port
app.listen(5000, () => console.log('Listening to port 5000........'))

// get js-client test page
app.get('/test', (req, res)=>{
    res.appendHeader('access-allow-origin', "*")
    res.status(200).sendFile(path.resolve(__dirname, './js-client/index.html'))
})

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    if(!name){
        return res.status(404).send('<pre>POST request: Field name is required!</pre>')
    }
    res.status(201).send(htmlTemplate(name))
})

// get all the people
app.get('/api/people', (req, res)=>{
    res.status(200).json({
        SUCCESS: true,
        results: people
    })
})

// post a person
app.post('/api/people', (req, res)=>{
    const {name} = req.body
    console.log(req.body)

    if(!name){
        return res.status(400).json({
            SUCCESS: false,
            MSG: 'Bad request. Name field must be filled!'
        })
    }
    res.status(201).json({
        SUCCESS: true,
        person: name
    })
    
})
