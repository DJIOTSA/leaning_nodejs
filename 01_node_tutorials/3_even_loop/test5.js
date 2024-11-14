const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await readFilePromise('../built_in_modules/content/result-sync.txt', 'utf8')
        console.log(first)
        const second = await readFilePromise('../built_in_modules/content/result-async.txt', 'utf8')
        console.log(second)

        // write ./writeFilePromise.txt
        await writeFilePromise('./writeFilePromise.txt', `\n******** This is the file write using util.promisify and readFile module!******\n\n${first}\n${second}\n\n*** end of third file ***\n`)
        
        // read writeFilePromise.text file
        const third = await readFilePromise('./writeFilePromise.txt', 'utf8')
        console.log(third)
    }catch(err){
        console.log(err)
    }
}

start()

