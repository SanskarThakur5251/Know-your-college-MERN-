// routes/toolsRoutes.js
import express from "express";
import College from "../models/allCollegesModel.js"; // <-- use your actual path/name

const router = express.Router();

// GET /api/tools/search?name=...
router.get("/search", async (req, res) => {
  try {
    const name = (req.query.name || "").trim();
    if (!name) return res.status(400).json({ message: "College name is required" });

    // partial, case-insensitive search on `name`
    const college = await College.findOne({
      name: { $regex: new RegExp(name, "i") },
    });

    if (!college) return res.status(404).json({ message: "College not found" });

    return res.json(college);
  } catch (err) {
    console.error("Tools search error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
