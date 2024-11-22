const { readFile, writeFile } = require('fs')
const util = require('util')
// promisify readFile and writeFile
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async (path1, path2) => {
    try {
        // read the two file
        const first = await readFilePromise(path1, { encoding: 'utf8' })
        console.log(first)
        const second = await readFilePromise(path2, { encoding: 'utf8' })
        console.log(second)
        // concatenate first and second into third.txt
        await writeFilePromise('./third.txt', `\n#######third file#####\n${second}${first}\n`, { encoding: "utf8" })
        const third = await readFilePromise('./third.txt', { encoding: 'utf8' })
        console.log(third)
    }catch(err){
        console.log('This error occurs:', err)
    }
}

start('./writeFile.txt', './writeFilePromise.txt')