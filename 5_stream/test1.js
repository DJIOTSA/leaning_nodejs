const { createReadStream, createWriteStream } = require('fs')

// method 1
const readStream = createReadStream('./big.txt', { "highWaterMark": 100000, "encoding": "utf8" })
readStream.on('data', (data) => {
    console.log(data)
})

// method 2
// const readStream2 = createReadStream('./big.txt', { "highWaterMark": 1000, "encoding": "utf8" })
// readStream2.on('open', (data) => {
//     console.log(data)
// })


//  // let write a big file
//  text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla eos facere
//  voluptatum harum nostrum, facilis accusantium explicabo quos porro quibusdam
//  aliquam officiis fuga, qui necessitatibus? Impedit est alias quaerat
//  repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//  vel nesciunt labore ea voluptatem, hic aliquid eum provident aperiam rerum
//  suscipit, dignissimos maiores quasi. Quo quod soluta quas praesentium porro!
//  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam nobis
//  modi explicabo at aut itaque adipisci alias atque expedita asperiores illo
//  provident, similique blanditiis ducimus pariatur excepturi dolorem obcaecati.
//  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolor
//  perferendis ipsum nam cum, soluta exercitationem eum molestiae corporis quam
//  iure sequi, pariatur libero quae hic. Voluptate veritatis rerum sint!
//  `

// console.log("big.txt creation has started....")
// for (let i = 0; i < 10000; i++) {
//     const writeBig = createWriteStream('./big.txt', { 'highWaterMark': 100000, 'flags': "a", "encoding": 'utf8' })
//     writeBig.write(text)
// }
// console.log("big.txt creation completed")