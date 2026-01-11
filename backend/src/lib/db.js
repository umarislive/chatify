import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY ", res.connection.host);
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED", error);
    process.exit(1); // 1 status code means 'failure' 0 means 'success'
  }
};

export default connectDB;
