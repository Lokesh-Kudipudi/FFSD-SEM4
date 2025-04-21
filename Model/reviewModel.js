const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: String,
  userId: String,
  itemId: String, // hotel or tour ID
  type: { type: String, enum: ["hotel", "tour"] },
  rating: Number,
  comment: String,
  createdAt: Date,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
