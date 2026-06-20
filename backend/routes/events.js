const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Store Event
router.post("/track", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();

    res.status(201).json({
      success: true,
      message: "Event stored successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get All Sessions
router.get("/sessions", async (req, res) => {
  try {
    const sessions = await Event.aggregate([
      {
        $group: {
          _id: "$session_id",
          totalEvents: { $sum: 1 },
        },
      },
      {
        $project: {
          session_id: "$_id",
          totalEvents: 1,
          _id: 0,
        },
      },
    ]);

    res.json(sessions);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get Events For One Session
router.get("/sessions/:sessionId", async (req, res) => {
  try {
    const events = await Event.find({
      session_id: req.params.sessionId,
    }).sort({
      timestamp: 1,
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get Heatmap Data
router.get("/heatmap", async (req, res) => {
  try {
    const { url } = req.query;

    const clicks = await Event.find({
      page_url: url,
      event_type: "click",
    });

    res.json(clicks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;