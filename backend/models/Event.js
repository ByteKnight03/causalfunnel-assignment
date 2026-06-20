const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true,
  },

  event_type: {
    type: String,
    required: true,
  },

  page_url: {
    type: String,
    required: true,
  },

  timestamp: {
    type: Date,
    required: true,
  },

  x: {
    type: Number,
    default: null,
  },

  y: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model("Event", EventSchema);