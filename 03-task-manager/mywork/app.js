// connect with mongodb atlast database|
require('./db/connect')                                                                                                                                                  
const express = require('express')
const app = express()
const path = require('path')
const taskRouter = require('./routes/tasks') 


// setup public files
app.use(express.static('./public'));
// setup json and from parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// setup port 
const port = 5000;

app.listen(port, ()=>console.log('Listen to port 5000......'))

// setup task router
app.use('/api/v1/tasks', taskRouter);

// task page
app.get('/task', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './public/task.html'))
})

