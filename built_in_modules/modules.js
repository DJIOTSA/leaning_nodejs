const names = require("./4_names");
const {sayHi, sayHello} = require("./5_utils");
const {items, username} = require("./alt_mod_export")
const data = require("./alt_mod_export")



sayHi(names.john)
sayHi(names.me)
sayHi(names.petter)
sayHello(names.me)

console.log("Items:", names.items)

console.log("use alt_mod_export imported variables")

console.log(`items: `, items)
sayHello(username.name)


console.log("\n\n@use alt_mod_export imported variables stored in data.")

console.log(`items: `, data.items)
sayHello(data.username.name)


