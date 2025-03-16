import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "expense_racker",
    });
    console.log("connected to database");
  } catch (e) {
    console.log("error to database");
  }
};

export default connect;
