const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  totalReveneue: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const Analytics = mongoose.model("Analytics", analyticsSchema);
