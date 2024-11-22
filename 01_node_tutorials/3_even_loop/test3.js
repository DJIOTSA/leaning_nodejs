// const http = require('http')

// template = `
//     <h1 style="color:red;">Oops! Page not found!</h1>
//     <h3 stye="color:blue;">Here is the list of available endpoints:</h3>
//     <ul>
//     <li><a href='/'>Home page</a></li>
//     <li><a href='/about'>About page</a></li>
//     <li><a href='/contact'>Contact page</a></li>
//     <li><a href='/info'>Info page</a></li>
//     </ul> 
//     `

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case '/':
//             res.end('<h1 style="color:navy;">Welcome to my first node server!</h1>')
//             console.log('Home page!')
//             break;
//         case '/about':
//             res.end('<h1 style="color:blue;">About page!</h1>')
//             console.log('about page!')
//             break;
//         case '/contact':
//             res.end('<h1 style="color:blue;">contact page!</h1>')
//             console.log('contact page!')
//             break;
//         case '/info':
//             res.end('<h1 style="color:blue;">info page!</h1>')
//             console.log('info page!')
//             break;
//         default:
//             res.statusCode = 404;
//             res.end(template);
//             console.log(`Page ${req.url} not found!`);
//             break;
//     }
// })

// server.listen(5000, () => {
//     console.log("Server running on port 5000, IP address localhost/127.0.0.1 ......")
// })

// console.log("I run first!")

// console.log("I run second too!")

// console.log("I run third")


const http = require('http')


const server = http.createServer((req, res) => {
    let url = req.url;
    switch (url) {
        case '/':
            res.end("<h1>This is the home page</h1>");
            break;
        case "/about":
            res.end("<pre>This is about page</pre>")
            break;
        case "/contact":
            res.end("<pre>this is contact page</pre>")
            break;
        default:
            res.end("<pre>Page not found</pre>")
            break;
    }
})

server.listen(5000, () => console.log("running on port 5000....."));

console.log("i run first")
console.log("i run second")


