require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const mongoURI = process.env.MONGODBURI;

const connectToMongo = async () => {
  try {
    if (!mongoURI) {
      throw new Error("MONGODBURI is not defined");
    }
    await mongoose.connect(mongoURI);
    console.log("Connection established with MongoDB server online");
  } catch (err) {
    console.error("Error while connecting to MongoDB:", err);
  }
};

module.exports = connectToMongo;
