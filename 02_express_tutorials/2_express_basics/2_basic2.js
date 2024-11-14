const express = require('express')
const path = require('path')

const app = express()

<<<<<<< HEAD

// setup body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

=======
>>>>>>> cbae981d5256e551bbda75d0acf14c90a1d67f2a
// setup static file and middleware
app.use(express.static('./public'))




// home page method 1: put index.html in the public folder and the express will render it automatically. (good for small projects)


// home page method 2
app.get('/2', (req, res) => {
    // use absolute path to send a home pae=ge
    res.status(200).sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})


// default (always place it after all the url rout
app.all('*', (req, res) => {
    res.status(404).send('<h1 style="color:red;">Oops! Page not found.</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening to port 5000....')
})