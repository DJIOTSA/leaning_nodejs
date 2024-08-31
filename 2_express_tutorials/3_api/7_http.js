const express = require('express')
const { people } = require('../../data')

const app = express()

// static assets
app.use(express.static('../methods-public/'))

// get the default http method
app.get('/api/people', (req, res)=>{
    res.status(200).json({
        status: "SUCCESS",
        results: people
    })
})


// post method


// put method


// delete method




app.listen(5000, ()=> console.log('listening to port 5000.....'))