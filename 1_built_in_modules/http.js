const http = require('http')

template = `
    <h1 style="color:red;">Oops! Page not found!</h1>
    <h3 stye="color:blue;">Here is the list of available endpoints:</h3>
    <ul>
    <li><a href='/'>Home page</a></li>
    <li><a href='/about'>About page</a></li>
    <li><a href='/contact'>Contact page</a></li>
    <li><a href='/info'>Info page</a></li>
    </ul> 
    `
// using if statement

// const server1 = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end('<h1 style="color:navy;">Welcome to my first node server!</h1>')
//         console.log('Home page!')
//     } else if (req.url == '/about') {
//         res.end('<h1 style="color:blue;">About page!</h1>')
//         console.log('about page!')
//     } else if (req.url == '/contact') {
//         res.end('<h1 style="color:blue;">contact page!</h1>')
//         console.log('contact page!')
//     }
//     else if (req.url == '/info') {
//         res.end('<h1 style="color:blue;">info page!</h1>')
//         console.log('info page!')
//     }
//     else {
//         res.end(template)
//         console.log(`Page ${req.url} not found.`)
//     }
// })



// using switch

const server = http.createServer((req, res) => {
    // Set Content-Type header for HTML responses
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case '/':
            res.end('<h1 style="color:navy;">Welcome to my first node server!</h1>')
            console.log('Home page!')
            break;
        case '/about':
            res.end('<h1 style="color:blue;">About page!</h1>')
            console.log('about page!')
            break;
        case '/contact':
            res.end('<h1 style="color:blue;">contact page!</h1>')
            console.log('contact page!')
            break;
        case '/info':
            res.end('<h1 style="color:blue;">info page!</h1>')
            console.log('info page!')
            break;
        default:
            res.statusCode = 404;
            res.end(template);
            console.log(`Page ${req.url} not found!`);
            break;
    }
});

server.listen(5000, () => {
    console.log('Server listening on port 5000, IP addresses: localhost or 127.0.0.1');
});
