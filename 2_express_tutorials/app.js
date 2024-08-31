const express = require('express')
const path = require('path')

const app = express()

// setup static files
app.use(express.static('public'))



//home page
app.get('/2', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

// image
app.get('/img', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/logo.svg'))
})
// css
app.get('/css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/styles.css'))
})
// js
app.get('/js', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/browser-app.js'))
})

app.get('/api', (req, res) => {
    res.status(200).json([
        {
            "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
            "age": 22,
            "username": "MHULO",
            "status": "malabar"
        },
        {
            "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
            "age": 22,
            "username": "MHULO",
            "status": "malabar"
        },
        {
            "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
            "age": 22,
            "username": "MHULO",
            "status": "malabar"
        },
        {
            "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
            "age": 22,
            "username": "MHULO",
            "status": "malabar"
        }
    ])
})

// default (always place it after all the url rout
app.all('*', (req, res) => {
    res.status(404).send('<h1 style="color:red;">Oops! page not found.')
})

app.listen(5000, () => console.log('listening to port 5000.....'))

