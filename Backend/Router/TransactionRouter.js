import express from "express";
import {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} from "../Controller/TransactionController.js";
import { isAuth } from "../Middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/add", isAuth, addTransaction);
router.get("/get", isAuth, getTransaction);
router.put("/update/:id", isAuth, updateTransaction);
router.delete("/delete/:id", isAuth, deleteTransaction);

export default router;
