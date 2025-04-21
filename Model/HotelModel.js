const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  address: String,
  location: String,
  rating: Number,
  currency: String,
  amenities: [String],
  mainImage: String,
  images: [String],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
  policies: [String],
  extras: {
    "Children And Extra Beds": [String],
    "Dining & Beverages": [String],
    "Wellness & Recreation": [String],
  },
  accessibility: {
    CommonAreas: [String],
    Rooms: [String],
  },
  roomType: [
    {
      title: String,
      price: String,
      rating: Number,
      features: [String],
      image: String,
    },
  ],
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = { Hotel };
