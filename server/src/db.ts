import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connect DB successfully");
  } catch (error) {
    console.log(`Error connect DB: ${error}`);
  }
};

export default connectDB;
