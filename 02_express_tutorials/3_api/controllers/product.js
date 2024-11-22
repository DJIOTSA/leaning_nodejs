const { products } = require('../../data')

const getProducts = (req, res) => {
    res.status(200).json({
        SUCCESS: true,
        results: products
    })
}

const getSingleProduct = (req, res) => {
    const { pk } = req.params
    if (isNaN(Number(pk))) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "invalid pk parameter"
        })
    }

    // find the specific product
    const singleProduct = products.find((p) => {
        if (p.id === Number(pk)) {
            return p
        }
    })
    if (!singleProduct) {
        return res.status(405).json({
            SUCCESS: false,
            MSG: `Product with the id ${pk} does not exists!`
        })
    }
    res.status(200).json({
        SUCCESS: true,
        results: [singleProduct,]
    })
}

const postProduct = (req, res) => {
    const { name, price, desc, image } = req.body;
    if (!name || !price || !desc || !image) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "body data required: name, price, desc, image"
        })
    }

    let newProduct = {
        id: products.length + 1,
        name: name,
        image: image,
        desc: desc,
        price: price,
        reviews: []
    }
    products.push(newProduct)
    res.status(201).json({
        SUCCESS: true,
        results: products
    })
}


const patchProduct = (req, res) => {
    const pk = Number(req.params.pk)
    if (isNaN(pk)) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "Invalid parameter(pk)."
        })
    }
    // CHECK IF THE USER EXISTS
    const product = products.find((p) => {
        if (p.id === pk) {
            return p
        }
    })

    if (!product) {
        return res.status(405).json({
            SUCCESS: false,
            MSG: "product not found!"
        })
    }

    // validate the body data
    const { price, image } = req.body;
    if (!price || !image) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "body data required: price, image"
        })
    }

    product.image = image
    product.price = price

    res.status(200).json({
        SUCCESS: true,
        results: [product,]
    })
}


const putProduct = (req, res) => {
    const pk = Number(req.params.pk)
    if (isNaN(pk)) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "Invalid parameter(pk)."
        })
    }
    // CHECK IF THE USER EXISTS
    const product = products.find((p) => {
        if (p.id === pk) {
            return p
        }
    })

    if (!product) {
        return res.status(405).json({
            SUCCESS: false,
            MSG: "product not found!"
        })
    }

    // validate the body data
    const { name, price, desc, image } = req.body;
    if (!name || !price || !desc || !image) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "body data required: name, price, desc, image"
        })
    }

    product.name = name
    product.image = image
    product.desc = desc
    product.price = price

    res.status(200).json({
        SUCCESS: true,
        results: [product,]
    })
}

const deleteProduct = (req, res) => {
    const pk = Number(req.params.pk)
    if (isNaN(pk)) {
        return res.status(400).json({
            SUCCESS: false,
            MSG: "Invalid parameter(pk)."
        })
    }
    // CHECK IF THE product EXISTS
    const product = products.find((p) => {
        if (p.id === pk) {
            return p
        }
    })

    if (!product) {
        return res.status(405).json({
            SUCCESS: false,
            MSG: "product not found!"
        })
    }

    let newProducts = products.filter((p) => {
        if (p.id !== pk) {
            return p
        }
    })

    res.status(200).json({
        SUCCESS: true,
        results: newProducts
    })
}

module.exports = {getProducts, getSingleProduct, postProduct, patchProduct, putProduct, deleteProduct}
