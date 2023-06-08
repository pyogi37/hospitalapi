const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const env = require("./environment");

//connect to the database
mongoose.connect(`mongodb://0.0.0.0:27017/${env.db}`);

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database", env.db);
});
