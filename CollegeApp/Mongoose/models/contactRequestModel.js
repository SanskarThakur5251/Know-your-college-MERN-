// models/contactRequestModel.js
import mongoose from "mongoose";
import { usersDB } from "../dbConnections.js"; // your connection

const contactRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  preferredDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default usersDB.model("ContactRequest", contactRequestSchema);


