const express = require('express')
const { products } = require('../data')
const { mapKeys } = require('lodash')

const app = express()

// home page
app.get('/', (req, res) => {
    let template = `<h1>Welcome to the home page!</h1>
    <h2> click on the following button to get the list of <a href="/api/products">Products</a>.</h2>`
    res.status(200).send(template)
})

// product/entry point
app.get('/api/products', (req, res) => {
    // select the id, name, and image of each product
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.status(200).json(newProducts)
})

// single product routing
app.get('/api/products/:pk', (req, res) => {
    const { pk } = req.params;
<<<<<<< HEAD
    const singleProduct = products.find((product) => product.id == 1)
=======
    const singleProduct = products.find((product) => product.id == pk)
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
    console.log(singleProduct)

    if (!singleProduct){
        return res.status(404).send('<pre>The resource you are looking for does not exist!</pre>')
    }
    return res.status(200).json(singleProduct)
})

// nested routing
app.get('/api/products/:pk/reviews/:reviewsID', (req, res)=>{
    const {pk, reviewsID} = req.params; 
    console.log(req.params)
    const singleProduct = products.find((product)=> product.id == pk)
    if (!reviewsID){
        return res.status(404).send('<pre>Review not found!</pre>')
    }else{
        return res.status(200).send(`<h1>Welcome home!</h1><pre>your review is: ${reviewsID}`)
    }
})

// default
app.all('*', (req, res) => {
    res.status(404).send('<pre> page not found</pre>')
})

app.listen(5000, (req, res) => {
    console.log('Server is running on port 5000.....')
})