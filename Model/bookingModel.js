const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  id: String,
  userId: String,
  type: { type: String, enum: ["hotel", "tour"] },
  itemId: String,
  bookingDate: Date,
  status: {
    type: String,
    enum: ["confirmed", "pending", "cancelled"],
  },
  payment: {
    method: String,
    amount: Number,
    currency: String,
    status: String,
  },
  details: Object,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = { Booking };
