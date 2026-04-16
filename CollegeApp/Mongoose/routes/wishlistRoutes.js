import express from "express";
import College from "../models/allCollegesModel.js";
import User from "../models/usersModel.js"; // your user schema must have wishlist array
import verifyToken from "./verifyToken.js";
import { usersDB } from "../dbConnections.js";

const router = express.Router();

// ✅ Add college to wishlist (unique per user)
router.post("/add/:collegeId", verifyToken, async (req, res) => {
  console.log("Wishlist data:", User.wishlist);

  try {
    const userId = req.user.id;
    const { collegeId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.wishlist) user.wishlist = []; // safety check

    if (user.wishlist.includes(collegeId)) {
      return res.status(400).json({ message: "Already in wishlist" });
    }

    user.wishlist.push(collegeId);
    await user.save();

    res.json({ message: "✅ Added to wishlist", wishlist: user.wishlist });
  } catch (err) {
    console.error("Error adding to wishlist:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Get user's wishlist
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("wishlist"); // populate college data
    res.json(user.wishlist);
  } catch (err) {
    console.error("Error fetching wishlist:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:collegeId", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.wishlist = user.wishlist.filter(
      (id) => id.toString() !== req.params.collegeId
    );

    await user.save();
    const updatedUser = await User.findById(req.user.id).populate("wishlist");
    res.json(updatedUser.wishlist); // return updated list
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
