import mongoose from "mongoose";

// MongoDB connection string (replace with your MongoDB URI)
const mongoURI =
  "mongodb+srv://shudarsanpoudel25:zlBJL7O8zocQFchg@mancityform.pkbxn.mongodb.net/Form?retryWrites=true&w=majority&appName=MancityForm";
//zlBJL7O8zocQFchg
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

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);

// MongoDB Connection
const connectToMongoDB = async () => {
  if (mongoose.connection.readyState === 1) return; // Prevent reconnection if already connected
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Serverless function to handle form submission
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Connect to MongoDB
      await connectToMongoDB();

      // Create a new form entry
      const newForm = new Form(req.body);

      // Save form data to MongoDB
      await newForm.save();

      // Send success response
      res.status(201).json({ message: "Data saved to MongoDB successfully!" });
    } catch (error) {
      console.error("Error saving data to MongoDB:", error);
      res.status(500).json({ message: "Failed to save data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
