import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/usersModel.js";


const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecretKey";




// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("JWT_SECRET:", JWT_SECRET);


    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login
// routes/authRoutes.js


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // ✅ Use _id, not email
    const token = jwt.sign(
      { id: user._id.toString() },   // 👈 this is what authMiddleware will read
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});



// Profile
router.get("/me", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.json(decoded);
  });
});

export default router;
