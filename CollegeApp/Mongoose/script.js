import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import "./dbConnections.js"; // Ensure MongoDB is connected


import collegesRoutes from "./routes/collegesRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactReqRoutes from "./routes/contactReqRoutes.js";
import noticesRoutes from "./routes/noticesRoutes.js";
import toolsRoutes from "./routes/toolsRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";


const app = express();
app.use(cors());
app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); // for form-data or x-www-form-urlencoded



app.use("/api/colleges", collegesRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactReqRoutes);
app.use('/api/notices', noticesRoutes);
app.use('/api/tools',toolsRoutes)



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
