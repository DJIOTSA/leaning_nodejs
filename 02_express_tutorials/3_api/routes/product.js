const express = require('express')
const {
    getProducts,
    getSingleProduct,
    postProduct,
    patchProduct,
    putProduct,
    deleteProduct
} = require('../controllers/product')

// setup the router
const router = express.Router()


router.route('/').get(getProducts).post(postProduct)
router.route('/:pk').patch(patchProduct).put(putProduct).delete(deleteProduct).get(getSingleProduct)

module.exports= router