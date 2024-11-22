const express = require('express')
const app = express()
const path = require('path')

// setup static file
app.use(express.static('./public'));


app.get('/image', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './public/logo.svg'))
})

app.get('/css', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './public//styles.css'))
})

app.get('/js', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './public//browser-app.js'))
})



app.get('/about', (req, res)=>{
    res.status(200).send('<h3> about page')
})


app.listen(5000, ()=> console.log('Listening to port 5000....'))