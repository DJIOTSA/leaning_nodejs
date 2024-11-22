const eventEmitter  = require('events')

// create an event 
const myEventEmitter = new eventEmitter()

// how does it how?
//  on - To listen to the event
//  emit - To emit the event
//  NOTE: the event can only emit what it has listen to.

// let emit "Hello world!"
myEventEmitter.on('response', ()=>{
    console.log("Hello world!")
})

// listen to variables
myEventEmitter.on('response2', (data)=>{
    console.log(`#####\tEmit parameters\t#####\n\n\tUsername:\t${data['username']}\n\tAge:\t\t${data['age']}\n\tCountry:\t${data['country']}`)
})

myEventEmitter.emit('response', {'username': "mhulo", "age": 22, "country": "Cameroon"})
myEventEmitter.emit('response2', {'username': "mhulo", "age": 22, "country": "Cameroon"})

// this will not display since the event this not listen to it.
myEventEmitter.on('response', ()=>{
    console.log("Hello world!2")
})