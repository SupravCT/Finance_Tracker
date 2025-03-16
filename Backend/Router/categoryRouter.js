import express from "express";
import {
  getCategory,
  
  updateCategory,
  deleteCategory,
  addCategory,
} from "../Controller/category.js";
import { isAuth } from "../Middlewares/isAuthenticated.js";

const router = express.Router();
router.get("/get", isAuth, getCategory);
router.post("/create", isAuth, addCategory);
router.put("/update/:id", isAuth, updateCategory);
router.delete("/delete/:id", isAuth, deleteCategory);
export default router;
