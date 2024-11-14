const {readFile, writeFile} = require('fs').promises


const start = async ()=>{
    const first = await readFile('./writeFilePromise.txt', 'utf8')
    console.log(first)
    await writeFile('./writeFile.txt', '\n\n****** This is the best way of using promise in nodejs ******\n\n')
    const second = await readFile('./writeFile.txt', 'utf8')
    console.log(second)
}


start()