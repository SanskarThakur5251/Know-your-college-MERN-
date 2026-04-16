import mongoose from "mongoose";

// Connection for colleges database
// export const collegesDB = mongoose.createConnection("mongodb://localhost:27017/collegesDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


// Connection for users database
export const usersDB = mongoose.createConnection("mongodb://localhost:27017/usersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

usersDB.on("connected", () => console.log("✅ usersDB connected"));
usersDB.on("error", (err) => console.error("❌ usersDB error:", err));


console.log("✅ All DB connections created");
