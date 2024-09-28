const express  =require('express')
const app = express()

const peopleRouters = require('./routes/people')
const userAuth = require('./routes/auth')

// setup form parser
app.use(express.urlencoded({extended:false}))
// setup json parser
app.use(express.json())

// setup static for method-public   
app.use(express.static('../methods-public'))

// setup our router
app.use('/api/people', peopleRouters)

// setup login router
app.use('/api/login', userAuth)


// login
app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(404).json({SUCCESS: false, msg:"Provide name value!"})
    }
    res.status(200).send(`<h1>Hi ${name}!`)
})

// setup port
app.listen(5000, ()=>{
    console.log("Server listening to port 5000 on localhost....")
})

