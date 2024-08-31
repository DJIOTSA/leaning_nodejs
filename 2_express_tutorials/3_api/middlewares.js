// logger middleware (always go to the next middleware or terminate the cycle)
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)

    // pass to the next middleware
    next()

    // terminate the cycle
    // res.send('testing')
}

// logger middleware (always go to the next middleware or terminate the cycle)
const loggerAPI = (req, res, next)=>{
    console.log('LoggerAPI middleware')
    next()
}

const authorize = (req, res, next)=>{
    const {user} = req.query;
    if (user=='mhulo'){
        // send this the da
        req.user = {name:'mhulo', id:1}
        console.log('user is authorized!')
        next()
    }
    else{
        res.status(401).send('<pre>Unauthorized</pre>')
        console.log('user is not authorized!')
    }
}

module.exports = {logger, loggerAPI, authorize}
