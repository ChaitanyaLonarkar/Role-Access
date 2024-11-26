import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // Connect to MongoDB

    mongoose.connect(`${process.env.DATABASE_LINK}`);

    console.log("connect");
  } catch (error) {
    console.log("error hai ", error);
  }
};
export default connectDb;
