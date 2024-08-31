const express = require('express')
const app = express()

// here we learn the following:
// how we can get informations using api and manipulate the the data we are looking for. 
// By making sure that only selected informations can be seen by the user

// we also saw how parameters hows and how we can use it to send data to the server

// we continue with the query string routing

// and end up with how middlewares how on node.js and express



// loading the data resource used for the training
const products = require('../../data') // A json file containing data



// ******** routing
app.get('/api/products', ((req, res)=>{
    res.json(products)
}))



// setup the network port
app.listen(5000, ()=>[
    console.log('Server running on port 5000, localhost.......')
])

