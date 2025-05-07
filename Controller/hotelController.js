const { Hotel } = require("../Model/hotelModel");

async function getAllHotels() {
  try {
    const hotels = await Hotel.find().lean();
    return {
      status: "success",
      data: hotels,
    };
  } catch (error) {
    throw new Error("Error fetching hotels: " + error.message);
  }
}

async function getHotelById(hotelId) {
  try {
    const hotel = await Hotel.findById(hotelId).lean();
    if (!hotel) {
      throw new Error("Hotel not Found!");
    }
    return {
      status: "success",
      data: hotel,
    };
  } catch (error) {
    throw new Error(
      "Error fetching Hotel by Id: " + error.message
    );
  }
}

module.exports = { getAllHotels, getHotelById };
