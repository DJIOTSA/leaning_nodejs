const eventEmitter  = require('events')

// create an instance of events
const CustomEmitter = new eventEmitter()

// some events method
// on -- listen for event
// emit -- emit an event

CustomEmitter.on('response', ()=>{
    console.log("data received")
})
CustomEmitter.on('response', ()=>{
    console.log("Good morning bro")
})
CustomEmitter.on('response', ()=>{
    console.log("Other logic")
})

CustomEmitter.emit('response')

CustomEmitter.on('response', ()=>{
    console.log("We can see that the other matters. We must listen to the even before emitting it. That is while this will ")
})


// received emitted data (parameters) using via the CustomEmitter event
CustomEmitter.on('user', (username, id)=>{
    console.log(`\nReceived user infos: \nname:${username}\nid:${id}`)
})

CustomEmitter.emit('user', "Mhulo", 24)


