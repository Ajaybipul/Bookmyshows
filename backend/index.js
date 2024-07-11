const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./connection.js"); // Adjust the path if necessary

const app = express();
const PORT = process.env.PORT || 8080;

// Body-parser middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Body-parser middleware to parse JSON data
app.use(bodyParser.json());

app.use(cors());

// Call the database connection function
connectToMongo().then(() => {
  // Start the server only after the database connection is established
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch((error) => {
  console.error("Failed to connect to MongoDB", error);
  process.exit(1); // Exit the process with an error code
});

app.use("/api", require("./routes"));

module.exports = app;
