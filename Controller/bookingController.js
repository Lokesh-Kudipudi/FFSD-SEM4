const { Booking } = require("../Model/bookingModel");

async function getUserBookings(userId) {
  try {
    const bookings = await Booking.find({ userId: userId })
      .populate("userId")
      .populate("itemId")
      .populate("paymentId")
      .lean();

    if (!bookings) {
      throw new Error("No bookings found for this user.");
    }

    return {
      status: "success",
      data: bookings,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}

module.exports = { getUserBookings };
