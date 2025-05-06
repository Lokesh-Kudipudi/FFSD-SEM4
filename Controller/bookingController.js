const { Booking } = require("../Model/bookingModel");
const { Payment } = require("../Model/paymentModel");
const { Tour } = require("../Model/tourModel");

async function getUserBookings(userId) {
  try {
    const bookings = await Booking.find({ userId: userId })
      .populate("userId")
      .populate("itemId")
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

async function getHotelBookings(hotelId) {
  try {
    const bookings = await Booking.find({ itemId: hotelId })
      .populate("userId")
      .populate("paymentId")
      .lean();

    if (!bookings) {
      throw new Error("No bookings found for this hotel.");
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

async function makeTourBooking(userId, tourId, bookingDetails) {
  try {
    // Validate the tour exists
    const tour = await Tour.findById(tourId);
    if (!tour) {
      throw new Error("Tour not found.");
    }
    // Create a new booking object
    const booking = new Booking({
      userId,
      type: "Tour",
      itemId: tourId,
      bookingDetails: {
        ...bookingDetails,
        price:
          tour.price.amount -
          tour.price.discount * tour.price.amount,
      },
    });

    const savedBooking = await booking.save();

    return {
      status: "success",
      data: {
        booking: savedBooking,
      },
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}

async function cancelBooking(bookingId) {
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    booking.bookingDetails.status = "cancelled";

    const updatedBooking = await booking.save();

    console.log(updatedBooking);  

    return {
      status: "success",
      data: updatedBooking
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message
    };
  }
}

module.exports = {
  getUserBookings,
  getHotelBookings,
  makeTourBooking,
  cancelBooking
};
