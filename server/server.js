// import express from "express";
// import cors from "cors";
// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Welcome to the OpenAI API",
//   });
// });

// app.post("/", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

    
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o", 
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//       max_tokens: 3000, 
//     });

    
//     res.status(200).json({
//       bot: completion.choices[0].message.content, 
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     res.status(500).json({
//       error: "Something went wrong with the API",
//     });
//   }
// });

// app.listen(4000, () =>
//   console.log("AI server is running on port: http://localhost:4000")
// );
