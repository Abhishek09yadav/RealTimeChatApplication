import jwt from "jsonwebtoken"

export const genrateToken =  (userId,res ) =>{
const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:"7d"});
res.cookie("ChatApp",token, {
  maxAge: 7 * 24 * 60 * 60 * 1000, // in Millisecond
  httpOnly: true, // prevent xss attacks
  sameSite: "strict", // prevents csrf attack
  secure: process.env.Node_ENV !== "development", // only https mode in prod
});
return token;
}