import express from "express";
import Notices from "../models/noticesModel.js";

const router = express.Router();

// GET top 10 notices
// ✅ GET /api/notices?limit=10&page=1
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10; // default 10 for homepage
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const total = await Notices.countDocuments();
    const notices = await Notices.find()
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      notices,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error("Error fetching notices:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
