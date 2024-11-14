// GLOBALS      -   NO WINDOW

// __dirname    -   path to current directory
// __filename   -   file name
// require      -   function to use modules (CommonJS)
// modules      -   info about current module (file)
// process      -   info about current env where the program is being executed
setInterval(()=>{
    console.log("hello world!")
}, 1000)
console.log("the directory name is :",__dirname)
console.log("the file name is :",__filename)
