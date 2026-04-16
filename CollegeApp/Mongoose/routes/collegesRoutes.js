import express from "express";
import College from "../models/allCollegesModel.js"; // <-- create model if not existing

const router = express.Router();


// router.get("/", async (req, res) => {
//   try {
//     const colleges = await College.find();
//     res.json(colleges);
//     console.log(colleges);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get("/:id", async (req, res) => {
//   const college = await College.findById(req.params.id);
//   res.json(college);
// });





// ✅ Get all colleges (with optional search)
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      // case-insensitive partial match on name or location
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
        ],
      };
    }

    const colleges = await College.find(query);
    res.json(colleges);
  } catch (err) {
    console.error("Error fetching colleges:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get single college by ID
router.get("/:id", async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.json(college);
  } catch (err) {
    console.error("Error fetching college:", err);
    res.status(500).json({ error: err.message });
  }
});





// Add to wishlist
router.post("/", async (req, res) => {
  try {
    const { _id, name, location } = req.body;

    // Prevent duplicates
    const exists = await Wishlist.findOne({ _id });
    if (exists) return res.status(400).json({ message: "Already in wishlist" });

    const newItem = new Wishlist({ _id, name, location });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
