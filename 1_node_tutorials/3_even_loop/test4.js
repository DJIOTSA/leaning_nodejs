const { readFile } = require('fs')

const getText = function (path) {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }

        })
    })
}

const start = async () => {
    try {
        const first = await getText('../built_in_modules/content/result-sync.txt')
        console.log(first)
        const second = await getText('../built_in_modules/content/result-async.txt')
        console.log(second)
    }catch(err){
        console.log(err)
    }
}


getText('../built_in_modules/content/result-async.txt')
.then(result => console.log(result))
.catch(err => console.log(err))


start()


