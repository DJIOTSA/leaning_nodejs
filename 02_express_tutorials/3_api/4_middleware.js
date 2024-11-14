const express = require('express')

const app = express()

<<<<<<< HEAD
// req => middleware => res

=======
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
// logger middleware (always go to the next middleware or terminate the cycle)
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)

    // pass to the next middleware
    next()
<<<<<<< HEAD

    // terminate the cycle
    // res.send('testing')
=======
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
}

// home page
app.get('/', logger,(req,res)=>{
<<<<<<< HEAD
    
=======
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
    res.send('Home')
})

// about page
app.get('/about', logger, (req,res)=>{
    res.send('About')
})

<<<<<<< HEAD

=======
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
app.listen(5000, ()=>{
    console.log('listening to port 5000......')
})