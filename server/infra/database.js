import mongoose from "mongoose";

// Conecta ao MongoDB Cluster
const connect = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@teste-tecnico.ukyn4z8.mongodb.net/?appName=teste-tecnico`
    )
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

const database = {
  connect,
};

export default database;
