const express = require("express"); // Import the express module
const {
  getAllHotels,
  getHotelById,
} = require("../Controller/hotelController");
const {
  makeHotelBooking,
} = require("../Controller/bookingController");

const hotelsRouter = express.Router(); // Create a new router object

// Define a route for the root path of the hotelsRouter
hotelsRouter.route("/").get((req, res) => {
  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/index", { user: req.user });
});

hotelsRouter.route("/search").get(async (req, res) => {
  let response = await getAllHotels();

  if (response.status != "success") {
    res.json({
      status: "fail",
      message: response.message,
    });
  }

  let hotelsToDisplay = response.data;

  const searchParam = req.query;

  const query = searchParam?.q;

  if (query) {
    hotelsToDisplay = hotelsToDisplay.filter((hotel) => {
      return [hotel.title, hotel.location, hotel.address]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/hotels", {
    hotels: hotelsToDisplay,
    user: req.user,
  });
});

hotelsRouter.route("/hotel/:id").get(async (req, res) => {
  const id = req.params.id;

  let response = await getHotelById(id);

  if (response.status != "success") {
    res.json({
      stats: "Fail",
      message: response.message,
    });
  }

  const hotel = response.data;

  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/hotel", { hotel, user: req.user });
});

hotelsRouter.route("/booking/:id").post(async (req, res) => {
  const id = req.params.id;

  let response = await makeHotelBooking(
    req.user._id,
    id,
    req.body
  );

  if (response.status != "success") {
    res.json({
      stats: "Fail",
      message: response.message,
    });
  } else {
    res.json({
      status: "success",
      message: "Booking successful",
    });
  }
});

module.exports = hotelsRouter; // Export the router object
