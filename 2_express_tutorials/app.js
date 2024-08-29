const http = require('http')
const fs = require('fs')
// solve the basics problem

const homepage = fs.readFile('')

const server = http.createServer((req, res) => {
    console.log("User hit the server")

    switch (req.url) {
        case "/":
            // provide response infos
            res.writeHead(200, { "content-type": "text/html" })
            res.write('<h1>Home page</h1>')
            res.end()
            break;
        case "about":
            // provide response infos
            res.writeHead(200, { "content-type": "text/html" })
            res.write('<h1>About page</h1>')
            res.end()
            break;
        default:
            // provide response infos
            res.writeHead(404, { "content-type": "text/html" })
            res.write('<h1>page not found</h1>')
            res.end()
            break;
    }

})

server.listen(5000)