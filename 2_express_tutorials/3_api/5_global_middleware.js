const express = require('express')
const {logger, loggerAPI, authorize} = require('./middlewares')
const {products} = require('../data')
const app = express()

// apply the middleware to a specific path
// to set multiple middleware we use an array of middlewares
app.use('/api', [loggerAPI, logger])


// api/products page
app.get('/api/products', (req,res)=>{
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.map((product)=>{
            const {id,name, image} =product
            return {id, name, image}
        })

        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    res.status(200).json(sortedProducts)
})

// add logic in a middleware
app.get('/authorize', authorize, (req, res)=>{
    console.log(req.user)
    res.status(200).send(`<h1>Authorized user: "${req.user.name}"</h1>`)
})

// api/products/:pk
app.get('/api/products/:pk', (req, res)=>{
    const {pk} = req.params;
    const singleProduct = products.find((product)=> product.id == pk)
    res.status(200).json(singleProduct)
})


// setup middleware globally
// the position os app.use matter
app.use(logger)


// home page
app.get('/',(req,res)=>{
    
    res.send('Home')
})

// about page
app.get('/about', (req,res)=>{
    res.send('About')
})



app.listen(5000, ()=>{
    console.log('listening to port 5000......')
})