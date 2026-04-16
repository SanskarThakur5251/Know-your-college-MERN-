import mongoose from "mongoose";
import { usersDB} from "../dbConnections.js";

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  collegeId: { type: mongoose.Schema.Types.ObjectId, ref: "College", required: true },
  createdAt: { type: Date, default: Date.now }
});

export default usersDB.model("wishlists", wishlistSchema);


