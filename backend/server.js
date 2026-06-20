const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const eventRoutes = require("./routes/events");

app.use("/api", eventRoutes);

app.get("/", (req, res) => {
  res.send("Analytics API Running");
});

app.get("/test", async (req, res) => {
  try {
    const Event = require("./models/Event");

    const event = new Event({
      session_id: "test123",
      event_type: "page_view",
      page_url: "http://localhost",
      timestamp: new Date(),
    });

    await event.save();

    res.send("Test event stored successfully");
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });