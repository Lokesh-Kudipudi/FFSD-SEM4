const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }, // Refers to the user making the payment
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  }, // Associated booking ID
  amount: Number,
  currency: String, // e.g., "INR", "USD"
  method: String, // e.g., "credit_card", "upi", "paypal"
  status: String, // "pending", "paid", "failed", "refunded"
  transactionId: String, // Provided by payment gateway
  gateway: String, // e.g., "Razorpay", "Stripe", "PayPal"
  createdAt: Date,
  updatedAt: Date,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = { Payment };
