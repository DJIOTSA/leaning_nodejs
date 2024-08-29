const os =  require('os')

// info about user
const user = os.userInfo()

console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds.`)

// other built in function: current Operating System
const currentOs ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(`The current Operating System: \n`,currentOs)
