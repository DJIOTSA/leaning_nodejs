// npm: node package manager
// package == module == dependency
// npm --- global command, comes with node
// npm --version 

// local dependency -- use it only in this particular project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json -- manifest file (store important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter  to skip)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1, 3,4,5,6, ["hello", 'how', 'aged', 456, 'are', 'you']]
const newItems = _.flattenDeep(items)
console.log(newItems)