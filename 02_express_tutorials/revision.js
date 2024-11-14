const express = require('express')
const { products } = require('./data')
const { notifications } = require('./notifications')
const { isNumber } = require('lodash')


// start
const app = express()


// get notifications
app.get("/api/notifications", (req, res) => {
    const list = notifications.map((notification) => {
        const { url, message, status, user, created_at } = notification
        return { url, message, status, user, created_at }
    })
    let x = list.length

    const data = {
        SUCCESS: true,
        TOTAL: x,
        results: list,
    }
    res.status(200).json(notifications)
})


// use dynamic parameter to access details of 
app.get("/api/notifications/:pk", (req, res) => {
    const { pk } = req.params;
    let id = Number(pk)
    if (!isNumber(pk)){
        res.status(405).json({
            SUCCESS: false,
            details: "Invalid parameter"
        })
    }
    
    const notification = notifications.find()
})


// get all products
app.get("/", (req, res) => {
    const list = products.map((item) => {
        const { image, name, price } = item;
        return { image, name, price };
    })
    res.status(200).json(list)
})


// listen
app.listen(5000, () => console.log("testing api with define json product file...."))