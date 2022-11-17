import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose.connect(process.env.DATAVASE, () => {
  console.log("Database Connect");
});
app.listen(4000);
console.log("Server is run");
