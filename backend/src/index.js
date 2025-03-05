import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
const PORT = process.env.PORT || 5999;
const app = express();
dotenv.config();

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
  connectDB();
});
app.get("/", (req, res) => res.send(`server is running on port ${PORT}`));
app.use(express.json());

app.use("/api/auth", authRoutes);
