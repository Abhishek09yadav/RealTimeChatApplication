import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import e from 'express';

export const protectRoute = async(req,res,next) =>{
  try{
  const token = req.cookie.ChatApp; 
  if(!token ) return  res.status(401).json({message:"unautorized access- no token provided "})
  const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
  if(!verifyUser){
      if (!token)
        return res.status(401).json({ message: "unautorized access due to invalid token" });
  }
  const user = await User.findById(verifyUser.userId).select('-password')
  if(!user){
    return res
      .status(404)
      .json({ message: "user not found" });
  }
  req.user =user;
  next()
}
catch{
console.log('error in protectRoute middleware',error);


}
}