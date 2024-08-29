const { readFileSync, writeFileSync } = require('fs')

console.log("*********** READ AND WRITE FILE SYNCHRONOUSLY: only for files with a very small file. ***********\n\n\n")

// Note: to read a file we always need to preside the encoding


// read file built_in_modules/content/first.txt file
const first_txt = readFileSync('./built_in_modules/content/first.txt', 'utf8')
console.log('first.txt file content:\n', first_txt,)
let test = readFileSync('./built_in_modules/content/subFolder/test.txt', 'utf8')
console.log('\n\ntest.txt file content before we writing on it:\n', test)

// Write into a file
console.log('\n\nwrite into test file without overwriting the test.txt file')
writeFileSync(
    './built_in_modules/content/subFolder/test.txt',
    `\nThis is the text inserted in the test.txt without over writing its content:\n${first_txt}`,
    { flag: 'a' }
)
test = readFileSync('./built_in_modules/content/subFolder/test.txt', 'utf8')
console.log('\n\ntest.txt file content after writing on it:\n', test)



// NOW OVERWRITE A FILE
console.log('\n\nOVERWRITE THE FILE CONTENT')
writeFileSync(
    './built_in_modules/content/subFolder/test.txt',
    `This is the test.txt file`
)

test = readFileSync('./built_in_modules/content/subFolder/test.txt', 'utf8')
console.log('\n\ntest.txt file content after overwriting it:\n', test)
