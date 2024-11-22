const express = require('express')
const app = express()
const router = require('./routes/product')

// setup static
app.use(express.static('./js-client'))
// setup json parser
app.use(express.json())

// setting the port 
app.listen(5000, () => {
    console.log('Listening to port 5000....')
})

// setup the router 
app.use('/api/products/v1', router)
