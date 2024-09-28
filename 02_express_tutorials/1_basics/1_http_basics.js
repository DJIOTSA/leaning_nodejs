const http = require('http')

/*
T he following code has multiple issue
    -1 we are not providing any information about the data we are sending.
    -2 we can not precise the path/endpoint to get a particular 
*/

const server = http.createServer((req, res)=>{
    console.log("User hit the server")
    res.end('<h1>Home page</h1>')
})

server.listen(5000)

