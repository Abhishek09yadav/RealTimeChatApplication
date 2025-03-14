import cloudinary from "../lib/cloudinary.js";
import { genrateToken } from "../lib/Utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      // generating token here
      genrateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log("error in signup", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    // generating token here
    genrateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
      message: "login successful",
    });
  } catch (error) {
    console.log("error during login:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("ChatApp", "", { maxAge: 0 });
    res.status(200).json({ message: "logout successful" });
  } catch (error) {
    console.log("error during logout:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateProfile = async (req,res)=>{
try {const {profilePic} = req.body;
const userId = req.user._id;
if (!profilePic)
  return res
    .status(400)
    .json({ message: "no profile pic provided" });

const uploadResponse = await cloudinary.uploader.upload(profilePic)
const updatedUser = await findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new:true});
  res.status(200).json(updatedUser);
}
catch(e){
res.status(500).json({message:"something went wrong"});
console.log('error in uploading image',e);
}
}
export const checkAuth = (req,res) =>{
  try{
res.status(200).json(req.user);
  }

  catch(e){
    console.log('error in checkAuth',e.message);
     res.status(500).json({message:"something went wrong"});
  }
}