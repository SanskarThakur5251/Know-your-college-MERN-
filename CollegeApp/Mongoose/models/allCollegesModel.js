import mongoose from "mongoose";
import { usersDB } from "../dbConnections.js";

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  image:{type:String},
  imageUrls: [{ type: String }], // optional: array of images
  

  details: {
    type: Map,
    of: String, // key-value pairs, both strings
  },
});
export default usersDB.model("College", collegeSchema);
 


