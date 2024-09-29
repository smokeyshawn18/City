import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const port = 3000;

// Enable CORS
app.use(
  cors({
    origin: "https://city-rose.vercel.app", // Allow your deployed front-end origin
  })
);

// Parse JSON body data
app.use(bodyParser.json());

// MongoDB connection string from environment variable
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Define a Schema and Model for storing form data
const formSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  message: { type: String, required: true, minlength: 5 },
});

const Form = mongoose.model("Form", formSchema);

// Handle GET request (optional)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Handle POST request to save form data
app.post("/", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).send("Data saved to MongoDB successfully!");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).send("Failed to save data");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
