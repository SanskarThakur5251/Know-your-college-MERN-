// import express from "express";
// import OpenAI from "openai";

// const router = express.Router();
// const openai = new OpenAI({
//   apiKey: ,
// });

// // POST /api/chat
// router.post("/", async (req, res) => {
//   try {
//     const { message } = req.body;

//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }],
//     });

//     res.json({
//       reply: completion.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error("Chatbot error:", error);
//     res.status(500).json({ error: "Chatbot service failed" });
//   }
// });

// export default router;
