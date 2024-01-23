const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_LINK);
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to DB", error);
  }
};

module.exports = connectDB;
