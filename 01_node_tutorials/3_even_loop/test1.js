const {readFile } = require('fs')


readFile(
    './writeFile.txt',
    'utf8',
    (err, result) => {
        if(err){
            console.log("This error occur:", err)
            return;
        }
        console.log("I execute third")
        console.log(result)
        console.log("reading completed")
    }
    
)

console.log("I execute first")

console.log("I will execute second")