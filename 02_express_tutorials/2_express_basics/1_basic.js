const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    // the method name here is send (representing the response.end() of node)
    res.status(200).send("home page")
})

app.get('/about', (req, res)=>{
    res.status(200).send('about page')
})


// customize my default 

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})


app.listen(5000, ()=>{
    console.log("server is listening on port 5000......")
})

// app.get
// app.post
// app.delete
// app.put
// app.all
// app.listen
// app.use