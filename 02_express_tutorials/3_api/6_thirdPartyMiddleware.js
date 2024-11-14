// We will use the popular morgan middleware as third party middleware
// npm i morgan
const express = require('express')

const morgan = require('morgan')

const app = express()

// setup morgan middleware globally
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    // check the server login and you will see something like this:
    /* 
        GET / 200 30 - 8.942 ms
    */
    res.status(200).send('Testing third party middleware')

})

app.get('/about', (req, res) => {
    // check the server login and you will see something like this:
    /* 
        GET /about 200 30 - 4.787 ms
    */
    res.status(200).send('Testing third party middleware')

})


app.listen(5000, () => {
    console.log('server listening to port 5000, localhost.......')
})