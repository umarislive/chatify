import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("MONGO_URI is not configured");

    const res = await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY ", res.connection.host);
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED", error);
    process.exit(1); // 1 status code means 'failure' 0 means 'success'
  }
};

export default connectDB;
