import dotenv from "dotenv";
dotenv.config(); // ✅ Load env first

import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import "./config/passport.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import profileRoutes from "./routes/user.route.js"; // ⚠️ check: this seems duplicate of user.route.js ?

const app = express();
const port = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URI;

// ================= Middleware =================
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ================= Routes =================
app.use("/api/feedback", feedbackRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/profile", profileRoutes); // ⚠️ This is suspicious, maybe should point to a dedicated profile route?
app.use("/api/users", userRoute);

// ================= Passport =================
app.use(passport.initialize());

// ================= MongoDB =================
try {
  await mongoose.connect(MONGO_URL);
  console.log("✅ MongoDB Connected");
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
  process.exit(1);
}

// ================= Cloudinary =================
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// ================= Start Server =================
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
