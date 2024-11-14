const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://mhulodjiotsa:2029@nodejsexpresstutorials.qbh97.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodejsExpressTutorials";

mongoose
  .connect(connectionString)
  .then(() => console.log("\nYOU'RE CONNECTED TO MONGODB..............."))
  .catch((err) => console.log(`An error occurs: ${err}`));
