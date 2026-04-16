// routes/contactReqRoutes.js
import express from "express";
import ContactRequest from "../models/contactRequestModel.js";

const router = express.Router();

// ✅ Save new contact/booking request
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, message, preferredDate } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ message: "Name, Phone, and Email are required" });
    }

    const newRequest = new ContactRequest({
      name,
      phone,
      email,
      message,
      preferredDate,
    });

    await newRequest.save();
    res.status(201).json({ message: "Contact request saved successfully" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get all requests (optional, for admin)
router.get("/", async (req, res) => {
  try {
    const requests = await ContactRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
