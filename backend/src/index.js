import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import cookieParser from 'cookie-parser'
import User from "./models/user.model.js";
import cors from 'cors'
const PORT = process.env.PORT || 5999;
const app = express();
app.use(cookieParser());
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:2703",
    credentials: true,
  })
);
app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
  connectDB();
});
app.get("/", (req, res) => res.send(`server is running on port ${PORT}`));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
