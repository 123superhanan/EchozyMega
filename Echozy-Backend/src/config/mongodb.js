import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;

    if (!dbURI) {
      throw new Error("❌ MONGODB_URI is not defined in your .env file");
    }

    const conn = await mongoose.connect(`${dbURI}/echozy`);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectdb;
