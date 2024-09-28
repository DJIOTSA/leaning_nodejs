const http = require('http')
const fs = require('fs')
// solve the basics problem

const homepage = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => {
    console.log("User hit the server")

    switch (req.url) {
        case "/":
            // provide response info
            res.writeHead(200, { "content-type": "text/html" })
            res.write(homepage)
            res.end()
            break;
        case "/about":
            res.writeHead(200, { "content-type": "text/html" })
            res.write('<h1>about page</h1>')
            res.end()
            break;
        default:
            res.writeHead(404, {'content-type':"text/html"})
            res.write('<h1>Oops! Page not found!')
            res.end()
            break;
    }

})

server.listen(5000, ()=>{
    console.log('server running on port 5000, localhost......')
})