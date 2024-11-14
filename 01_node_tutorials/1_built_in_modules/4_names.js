// Local
const secret = "SUPER SECRET"
// share
const me = "Djiotsa Djouake Christian Daryn"
const petter = "Petter"
const john = "John"

// there is two way to do it and the two can not work at once

// method 1
// module.exports.items = {1: "tomato", 2: "potato", 3: "Apple"}
// module.exports.elements = {john, petter, me}

// method  2
let items = {1: "tomato", 2: "potato", 3: "Apple"}
let elements = {john, petter, me}
module.exports = { item elements}