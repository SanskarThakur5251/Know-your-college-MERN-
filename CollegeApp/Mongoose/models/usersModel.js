import mongoose from "mongoose";
import { usersDB } from "../dbConnections.js"; // Import your connection

import College from "./allCollegesModel.js"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: usersDB.model("College") }]

});

// Attach model to the correct connection

export default usersDB.model("users", userSchema);





// // models/usersModel.js
// // import mongoose from "mongoose";
// // import { usersDB } from "../dbConnections.js";

// // const contactRequestSchema = new mongoose.Schema({
// //   name: String,
// //   phone: String,
// //   email: String,
// //   message: String,
// //   preferredDate: Date,
// //   createdAt: { type: Date, default: Date.now },
// // });

// // const userSchema = new mongoose.Schema({
// //   email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
// //   password: { type: String, required: true },
// //   contactRequests: [contactRequestSchema], // array of booking requests
// // });

// // const User = usersDB.model("User", userSchema);
// // export default User;

// import mongoose from "mongoose";
// import { usersDB } from "../dbConnections.js";

// // Schema for contact/booking requests
// const contactRequestSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String },
//   preferredDate: { type: Date },
// });

// // Main user schema
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true }, // username is email
//   password: { type: String, required: true },
//   contactRequests: [contactRequestSchema], // stores booking/contact requests
// });

// const User = usersDB.model("User", userSchema);

// export default User;

