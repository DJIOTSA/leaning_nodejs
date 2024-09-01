const express  =require('express')
const app = express()

const peopleRouters = require('./routes/people')

// setup form parser
app.use(express.urlencoded({extended:false}))
// setup json parser
app.use(express.json())


// login
app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(404).json({SUCCESS: false, msg:"Provide name value!"})
    }
    res.status(200).json({SUCCESS:true, msg:"User successfully logged in."})
})

// setup our router
app.use('/api/people', peopleRouters)


// setup port
app.listen(5000, ()=>{
    console.log("Server listening to port 5000 on localhost....")
})