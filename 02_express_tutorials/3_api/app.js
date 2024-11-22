const express = require('express')
const app = express()
const { products } = require('../data')
const { authorize } = require('./middlewares')
// setting up the port
app.listen(5000, () => console.log('Listening to port 5000......'))

// starting with middleware
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const date = new Date().toLocaleDateString();
    const time = new Date().toTimeString()
    const log = { method, url, date, time }
    console.log(log)
    // pass to the next middleware
    next()
}

// global middleware
app.use('/', logger)

// let use an authorize middleware. 
// use the following query to authenticate: user=mhulo
app.get('/', authorize, (req, res) => {
    let template = `<h1>Home page</h1>
    <h3> To get all the products click on the following link: <a href="/api/products/v1/">Get all Products</a><h3>`
    res.status(200).send(template);
})

// get all products api
app.get('/api/products/v1/', logger, (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search) || product.desc.startsWith(search)
        })
    }

    if (!isNaN(Number(limit))) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    sortedProducts = sortedProducts.map((product) => {
        const { id, name, image, price } = product
        return { id, name, image, price }
    })
    res.status(200).json({
        SUCCESS: true,
        results: [...sortedProducts,]
    })
})

// get a single product: using parameter
app.get('/api/products/v1/:pk', (req, res) => {
    const pk = Number(req.params.pk);
    if (isNaN(pk)) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: 'failed, invalid pk parameter'
        })
    }

    const singleProduct = products.find((product) => {
        if (product.id === pk) {
            return product;
        }
    })

    if (!singleProduct) {
        return res.status(404).json({
            SUCCESS: False,
            MSG: "Resource not found!"
        })
    }

    // get abstract fields
    const { id, name, image, desc, price } = singleProduct;
    res.status(200).json({
        SUCCESS: true,
        results: [{ id, name, image, desc, price },]
    })

})

// product reviews
app.get('/api/products/v1/:pk/reviews/', (req, res) => {
    const pk = Number(req.params.pk);
    if (isNaN(pk)) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: 'failed, invalid pk parameter'
        })
    }

    const singleProduct = products.find((product) => {
        if (product.id === pk) {
            return product;
        }
    })

    if (!singleProduct) {
        return res.status(404).json({
            SUCCESS: False,
            MSG: "Resource not found!"
        })
    }

    // get abstract fields
    const reviews = singleProduct.reviews;
    res.status(200).json({
        SUCCESS: true,
        results: reviews,
    })

})

// get single product reviews
app.get('/api/products/v1/:pk/reviews/:rID', (req, res) => {
    const pk = Number(req.params.pk);
    const rID = Number(req.params.rID);
    if (isNaN(pk) || isNaN(rID)) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: 'failed, invalid pk parameter'
        })
    }

    const singleProduct = products.find((product) => {
        if (product.id === pk) {
            return product;
        }
    })

    if (!singleProduct) {
        return res.status(404).json({
            SUCCESS: False,
            MSG: "Resource not found!"
        })
    }

    // get abstract fields
    const reviews = singleProduct.reviews;

    // find single reviews
    const singleReview = reviews.find((elt) => {
        if (elt.id === rID) {
            return elt
        }
    })

    if (!singleReview) {
        return res.status(200).json({
            SUCCESS: false,
            MSG: "Resource not found!"
        })
    }

    res.status(200).json({
        SUCCESS: true,
        results: [singleReview,],
    })

})