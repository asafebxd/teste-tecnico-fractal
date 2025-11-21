import mongoose from "mongoose";

console.log(process.env.USER);

const connect = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@teste-tecnico.po2ycmw.mongodb.net/?appName=teste-tecnico`
    )
    .then(() => {
      console.log("Connected to databnase");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

const database = {
  connect,
};

export default database;
