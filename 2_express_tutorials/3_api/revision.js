const express = require('express')
const app = express()

// here we learn the following:
// how we can get informations using api and manipulate the the data we are looking for. 
// By making sure that only selected informations can be seen by the user

// we also saw how parameters hows and how we can use it to send data to the server

// we continue with the query string routing

// and end up with how middlewares how on node.js and express



// loading the data resource used for the training
const { products } = require('../../data') // A module containing a json data
const { isNumber } = require('lodash')



// ******** routing
app.get('/api/products', ((req, res) => {
    // select the fields to be displayed
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.status(200).json(newProducts)
}))

// app simple product details
app.get('/api/products/:pk', (req, res) => {
    const { pk } = req.params;

    // find the single product
    const singleProduct = products.find((product) => {
        return product.id == pk
    })

    if (!singleProduct) {
        const error = {
            "detail": "No product match the credentials",
        }
        return res.status(200).json(error)
    }
    res.status(200).json(singleProduct)
})

// nested routing
app.get('/api/products/:pk/reviews/:rvID', (req, res) => {
    const { pk, rvID } = req.params;

    // find the single product
    const singleProduct = products.find((product) => {
        return product.id == pk
    })

    if (!singleProduct) {
        const error = {
            "detail": "No product match the credentials",
        }
        return res.status(200).json(error)
    }

    console.log(isNumber(Number('a')))

    if (!isNaN(Number(rvID))) {
        const review = {
            reviewID: Number(rvID),
            status: "good",
            description: "This is the best product i ever used. I recommend it to everyone that like quantity and quality at once."
        }
        return res.status(200).json(review)
    }
    res.status(404).json({
        status: "FAIL",
        detail: 'Invalid reviewID',
    })
})

// query string routing
app.get('/api/query/products', (req, res)=>{
    const newProducts = products.map((product)=> {
        const {name, image} = product;
        return {name, image}
    })
    // sorted products
    let sortedProducts = [...newProducts]


    // perform search and limit the number of data to display
    res.status(200).json(newProducts)
})



// setup the network port
app.listen(5000, () => [
    console.log('Server running on port 5000, localhost.......')
])

