import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// update profile ........
router.put('update-profile',protectRoute, updateProfile)
export default router;
