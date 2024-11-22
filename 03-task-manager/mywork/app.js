const express = require('express')
const app = express()

// setup public files
app.use(express.static('./public'));
// setup port 
const port = 5000;

app.listen(port, ()=>console.log('Listen to port 5000......'))