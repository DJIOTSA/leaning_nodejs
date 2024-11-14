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

// npm i nodemon -D -- this module will watch our node code modification and restart the app. The -D/--save-dev define that nodemon is a devDependency
// devDependencies are used for the development not in the production
// after pushing the code to github(without node_modules folder) and cloning it, we just need to run 'npm install' to install all the dependencies

// in the package.json you can write you own script -- eg: "dev" : "nodemon ./npm/intro.js". and run this using npm run dev

const _ = require('lodash')

const items = [1,3,4,5,6,[90, 456]]
const newItems = _.flattenDeep(items)
console.log(newItems)
