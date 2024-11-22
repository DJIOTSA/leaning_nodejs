const { readFile, writeFile } = require('fs').promises

const start = async (path1, path2) => {
    try {
        // read the two files
        const first = await readFile(path1, { encoding: "utf8" })
        console.log(first)
        console.log('\nDisplay first')
        const second = await readFile(path2, { encoding: "utf8" })
        console.log(second)
        console.log('\nDisplay second')
        // write file third
        await writeFile('./third.txt', `\n{first}\n${second}`, { encoding: 'utf8' })
        const third = await readFile('./third.txt', { encoding: 'utf8' })
        console.log(third)
        console.log('\nDisplay third')
    } catch (err) {
        console.log("This error occurs:\n", err)
    }
}

start('./writeFile.txt', './writeFilePromise.txt')

