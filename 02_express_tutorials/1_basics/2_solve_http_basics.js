const fs = require('fs')
const http = require('http')

const homepage = fs.readFileSync('./index.html', { encoding: 'utf8' })

const server = http.createServer((req, res) => {
    console.log("Someone hit the server!")
    let url = req.url;
    switch (url) {
        case '/':
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(homepage)
            break;
        case "/about":
            res.writeHead(200, { 'content-type': "text/html" })
            res.end('<pre>About page</pre>')
            break;
        default:
            res.writeHead(400, { 'content-type': 'utf8' })
            res.end('<h1>Oops!!!</h1><pre>Resource not available</pre>')
    }

})


server.listen(5000, () => console.log('Listen to port 5000......'))