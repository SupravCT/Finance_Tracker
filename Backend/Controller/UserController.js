import UserModel from "../Model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ErrorHandler from "../Middlewares/error.js";
import expressAsyncHandler from "express-async-handler";

export const register = expressAsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new Error("All fields are required", 400));
  }
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    return next(new Error("User already exist", 400));
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(200).json({
    success: true,
    user,
  });
});

export const login = expressAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new Error("all fields are required", 400));
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return next(new Error("User not found", 400));
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return next(new Error("Invalid password", 400));
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "success login",
    user,
    token,
  });
});

export const privateProfile = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  console.log(req.user.id);
  if (!user) {
    return new Error("user not found", 400);
  }
  res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = expressAsyncHandler(async (req, res, next) => {
  const { password, newPassword } = req.body;
  if (!password || !newPassword) {
    return next(new Error("Password and new password are required", 400));
  }
  const user = await UserModel.findById(req.user._id);
  if (!user) {
    return next(new Error("user not found", 400));
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return next(new Error("invalid password", 400));
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  res.status(200).json({
    message: "changed successfully",
  });
});

export const updateProfile = expressAsyncHandler(async (req, res, next) => {
  const { name, email } = req.body;
  const user = await UserModel.findByIdAndUpdate(
    req.user._id,
    {
      name,
      email,
    },
    {
      new: true,
    }
  );
  if (!user) {
    return next(new Error("user not found", 400));
  }
  res.status(200).json({
    success: true,
    user,
  });
});
