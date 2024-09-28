const express = require('express')

const app = express()

// logger middleware (always go to the next middleware or terminate the cycle)
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)

    // pass to the next middleware
    next()
}

// home page
app.get('/', logger,(req,res)=>{
    res.send('Home')
})

// about page
app.get('/about', logger, (req,res)=>{
    res.send('About')
})

app.listen(5000, ()=>{
    console.log('listening to port 5000......')
})