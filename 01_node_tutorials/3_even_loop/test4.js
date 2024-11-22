const { rejects } = require('assert')
const {readFile} = require('fs')
const { resolve } = require('path')

// getText function

const getText = (path)=>{
    return new Promise((resolve, rejects)=>{
        readFile(path, {encoding: "utf8"}, (err, data)=>{
            if(err){
                rejects(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

getText('./writeFile.txt')
.then((data)=>console.log(data))
.catch((err)=> console.log(err))

// let user async/await
const start = async (path1, path2)=>{
    const first = await getText(path1)
    console.log(first)
    const second = await getText(path2)
    console.log(second)
}

start('./writeFilePromise.txt', './writeFile.txt')