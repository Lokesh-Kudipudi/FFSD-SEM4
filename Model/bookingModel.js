const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    enum: ["Hotel", "Tour"],
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "type",
  },
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
  },
  bookingDetails: Object,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = { Booking };
