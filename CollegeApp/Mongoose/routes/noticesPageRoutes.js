import express from "express";
import Notices from "../models/noticeModel.js";

const router = express.Router();

// ✅ Get all notices with pagination
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // current page
    const limit = 25; // notices per page
    const skip = (page - 1) * limit;

    const total = await Notices.countDocuments();
    const notices = await Notices.find()
      .sort({ date: -1 }) // newest first
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
