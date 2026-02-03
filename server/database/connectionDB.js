import mongoose from "mongoose";

let server = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URI}/NovaAsset-DB`)
      .then((message) => {
        console.log(`MongoDB connected with server ${message.connection.host}`);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export default server;
