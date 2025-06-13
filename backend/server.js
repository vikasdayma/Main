// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB connection
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((err) => console.error("MongoDB connection error:", err));

// // // Define Mongoose schema and model
// // const contactSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   message: String,
// //   createdAt: { type: Date, default: Date.now },
// // });

// // const Contact = mongoose.model("contact", contactSchema, "details");


// // // API route to receive form data
// // app.post("/api/contact", async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;

// //     if (!name || !email || !message) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }

// //     const newContact = new Contact({ name, email, message });
// //     await newContact.save();

// //     res.status(201).json({ message: "Message saved successfully" });
// //   } catch (error) {
// //     console.error("Error saving contact:", error);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Define Mongoose schema and model
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now },
// });

// const Contact = mongoose.model("contact", contactSchema, "details");

// // POST route to save form data
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Message saved successfully" });
//   } catch (error) {
//     console.error("Error saving contact:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ GET route to fetch saved contacts
// // API route to fetch all contact data
// app.get("/api/contact", async (req, res) => {
//     try {
//       const contacts = await Contact.find();
//       res.status(200).json(contacts);
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//       res.status(500).json({ error: "Server error" });
//     }
//   });
  

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Mongoose schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  industry: String,
  problem: String,
  day: String,
  time: String,
  source: String,
  phone: String,
  demoType: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema, "details");

// POST route
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      industry,
      problem,
      day,
      time,
      source,
      phone,
      demoType,
      message,
    } = req.body;

    if (!name || !email || !company || !industry || !problem || !day || !time || !source || !demoType) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const newContact = new Contact({
      name,
      email,
      company,
      industry,
      problem,
      day,
      time,
      source,
      phone,
      demoType,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET route
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
