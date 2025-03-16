import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ErrorHandler from "../Middlewares/error.js";
import expressAsyncHandler from "express-async-handler";
import CategoryModel from "../Model/Category.js";

export const addCategory = expressAsyncHandler(async (req, res, next) => {
  const { name, type } = req.body;
  if (!name || !type) {
    return next(new Error("All fields are required", 400));
  }

  const lowercase = name.toLowerCase();
  const lowercaseType = type.toLowerCase();
  const validTypes = ["expense", "income"];

  if (!validTypes.includes(type.toLowerCase())) {
    return next(new Error("Invalid type" + type, 400));
  }

  const categoryExist = await CategoryModel.findOne({
    name: lowercase,
    user: req.user,
  });
  if (categoryExist) {
    return next(new Error("Category already exist", 400));
  }

  const category = await CategoryModel.create({
    name: lowercase,
    type: lowercaseType,
    user: req.user,
  });
  res.status(200).json({
    success: true,
    category,
  });
});

export const getCategory = expressAsyncHandler(async (req, res, next) => {
  const categories = await CategoryModel.find({ user: req.user });
  res.status(200).json({
    success: true,
    categories,
  });
});

export const updateCategory = expressAsyncHandler(async (req, res, next) => {
  const { name, type } = req.body;
  console.log("Category ID from URL:", req.params.id);
  console.log("User ID from request:", req.user._id);
  const category = await CategoryModel.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    {
      name,
      type,
    },
    {
      new: true,
    }
  );

  if (!category) {
    res.status(404).json({
      success: false,
      message: "category not found",
    });
  }

  res.status(200).json({
    success: true,
    category,
  });
});

export const deleteCategory = expressAsyncHandler(async (req, res, next) => {
  const category = await CategoryModel.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!category) {
    return res.status(404).json({
      success: false,
      message: "category not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "category deleted successfully",
  });
});
