import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Create Express app
const app = express();
const port = 3000;

// Enable CORS
app.use(
  cors({
    origin: ["https://city-rose.vercel.app"],
  })
);

// Parse JSON body data
app.use(bodyParser.json());

// MongoDB connection string (point to the "cform" database)
const mongoURI =
  "mongodb+srv://shudarsanpoudel25:letsgocity@cluster0.cshj1.mongodb.net/cform?retryWrites=true&w=majority";

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

// Use the "cmsgs" collection in the "cform" database
const Form = mongoose.model("cmsg", formSchema);

// Handle GET request (optional)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Handle POST request to save form data
app.post("/cmsgs", async (req, res) => {
  try {
    // Create a new form entry
    const newForm = new Form(req.body);

    // Save form data to MongoDB in the "cmsgs" collection
    await newForm.save();

    res.status(201).send("Data saved to MongoDB successfully!");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).send("Failed to save data");
  }
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
