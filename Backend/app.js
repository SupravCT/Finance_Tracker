import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connect from "./database/db.js";
import user from "./Router/userRouter.js";
import ErrorHandler from "./Middlewares/error.js";
import category from "./Router/categoryRouter.js";
import transaction from "./Router/TransactionRouter.js";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", user);
app.use("/api/v1/category", category);
app.use("/api/v1/transaction", transaction);

app.use(ErrorHandler);
connect();

export default app;
