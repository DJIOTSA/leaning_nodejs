const {readFile } = require('fs')

console.log("I execute first")

readFile(
    '../built_in_modules/content/subFolder/test.txt',
    'utf8',
    (err, result) => {
        if(err){
            console.log("This error occur")
            return;
        }
        console.log(result)
        console.log("reading completed")
    }
)

console.log("I will execute third")