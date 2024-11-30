const mongoose = require('mongoose')
const connectionString =
  "mongodb+srv://mhulodjiotsa:2029@nodejsexpresstutorials.qbh97.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodejsExpressTutorials";

mongoose.connect(connectionString)
  .then(() => console.log('connected to mongodb atlas database...'))
  .catch((err) => console.log(`The following error occurs: ${err}`))

