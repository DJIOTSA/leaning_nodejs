// logger middleware (always go to the next middleware or terminate the cycle)
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)

    // pass to the next middleware
    next()

    // terminate the cycle
    // res.send('testing')
}

// logger middleware (always go to the next middleware or terminate the cycle)
const loggerAPI = (req, res, next) => {
    console.log('LoggerAPI middleware')
    next()
}

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user == 'mhulo') {
        // send this the da
        req.user = { name: 'mhulo', id: 1 }
        console.log('user is authorized!')
        next()
    }
    else {
        res.status(401).send('<pre>Unauthorized user.</pre>')
        console.log('user is not authorized!')
    }
}


const secondMiddleware = (req, res, next) => {
    // in here you ca add the logic of your choice
    console.log("This is the second middleware")
    // always remember that you must pass the request to the next middleware unless 
    // you want to end the process in that case, return res.end() instead of next()
    next()
}

module.exports = { logger, loggerAPI, authorize, secondMiddleware }
