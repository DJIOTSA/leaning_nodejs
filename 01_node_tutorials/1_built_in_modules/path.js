const path =  require('path')

// path separator
console.log(path.sep)

// path join
const filePath = path.join('./content/subFolder/test.txt')
console.log("The file path is:", filePath)
const filePath1 = path.join('./content/', '/subFolder/', '/test.txt')
console.log("The file path 1 is:", filePath1)

const test = path.join(__dirname, "content", 'subFolder', 'test.txt')
console.log("Test path is :", test)


// path base name
const base = path.basename(filePath1)
console.log("The base name is:", base)

// path resolve: absolute path
const absolutePath = path.resolve(__dirname, 'content', 'subFolder', 'test.txt')
console.log("Absolute path:", absolutePath)


