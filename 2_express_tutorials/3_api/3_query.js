const express = require('express')
const { products } = require('../../data')

const app = express()


// complex routing : query
app.get('/api/v1/query', (req, res) => {
    try {
        const { search, limit } = req.query;
        let sortedProducts = [...products]

        if (search) {
            sortedProducts = sortedProducts.filter((product) => {
                return product.name.startsWith(search)
            })
        }
        if (limit) {
            sortedProducts = sortedProducts.slice(0, Number(limit))
        }

        if (sortedProducts.length < 1) {
            return res.status(200).send('<pre>No product match the query.</pre>')
        }
        res.status(200).json(sortedProducts)
    }
    catch(err){
        console.log(`An error occurs:\t${err}`)
        res.status(404).send('<pre>Something went wrong!</pre>')
    }
})


app.listen(5000, () => {
    console.log("listening to port 5000....")
})