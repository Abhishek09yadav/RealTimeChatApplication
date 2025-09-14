import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.ChatApp;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token" });
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded userId:", userId);

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute:", error.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
