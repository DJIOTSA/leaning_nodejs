const express = require('express')
const { people } = require('../../data')

const app = express()

// static assets
app.use(express.static('../methods-public/'))

// parse form data 
// using the express builtin middleware urlencoded
app.use(express.urlencoded({ extended: false}))

// get the default http method
app.get('/api/people', (req, res)=>{
    res.status(200).json({
        status: "SUCCESS",
        results: people
    })
})

app.post('/api/people', (req, res)=>{
    // 201 status for successful post request
    res.status(201).send('Success')
})


// post method
app.post('/login', (req,res)=>{
    const {username} = req.body;
    console.log(req.body)
    if (username == ""){
        return res.status(404).send('<pre> Please provide your credentials!</pre>')
    }
    res.status(200).send(`<h1>Hi ${username}</h1>`)
})

// put method


// delete method




app.listen(5000, ()=> console.log('listening to port 5000.....'))