import express from "express";
import {isAuth} from "../Middlewares/isAuthenticated.js";
import { changePassword, login, privateProfile, register, updateProfile } from "../Controller/UserController.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get('/profile/:id',isAuth,privateProfile)
router.put('/password',isAuth,changePassword)
router.put('/update',isAuth,updateProfile)

export default router;
