const express = require("express");
const {
  getTourById,
  getAllTours,
} = require("../Controller/tourController");
const {
  makeTourBooking,
} = require("../Controller/bookingController");
const { setDefaultBaseUrls } = require("@google/genai");

// Create a new router object
const toursRouter = express.Router();

// Define route for the root path of tours
toursRouter.route("/").get((req, res) => {
  // Render the 'tours/index' view with a name variable
  res.render("tours/index", { user: req.user });
});

// Define route for the search path of tours
toursRouter.route("/search").get(async (req, res) => {
  const searchParam = req.query;

  let currentPage = searchParam?.page;
  let rating = searchParam?.rating?.split(",");
  let query = searchParam?.q;
  let toursQuery = await getAllTours(); // Fetch all tours

  let toursToDisplay = toursQuery.data; // Extract the data from the query result

  // Set default page to 0 if not provided
  if (currentPage == undefined) {
    currentPage = 0;
  }

  // Filter tours by rating if rating parameter is provided
  if (rating) {
    toursToDisplay = toursToDisplay.filter((tour) =>
      rating.includes(String(tour.rating))
    );
  }

  // Filter tours by query if query parameter is provided
  if (query) {
    toursToDisplay = toursToDisplay.filter((tour) => {
      return [
        tour.title,
        ...tour.itinerary.flatMap((i) => i.activities),
        ...tour.destinations.map((d) => d.name),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  const numberOfCardsPerPage = 12;
  const numberOfPages = Math.floor(
    (toursToDisplay.length - 1) / numberOfCardsPerPage
  );

  // Paginate the tours to display based on the current page
  toursToDisplay = toursToDisplay.slice(
    currentPage * numberOfCardsPerPage,
    currentPage * numberOfCardsPerPage + numberOfCardsPerPage
  );

  let displayRightButton = true;
  let displayLeftButton = true;

  // Determine if the right navigation button should be displayed
  if (currentPage == numberOfPages) {
    displayRightButton = false;
  }

  // Determine if the left navigation button should be displayed
  if (currentPage == 0) {
    displayLeftButton = false;
  }

  // Render a 'no tours' view if no tours match the search criteria
  if (toursToDisplay.length == 0) {
    res.render("tours/noTours");
    return;
  }

  // Render the 'tours/tours' view with the filtered and paginated tours
  res.render("tours/tours", {
    tours: toursToDisplay,
    displayButton: { displayLeftButton, displayRightButton },
    rating,
    user: req.user,
  });
});

// Define route for displaying a specific tour by ID
toursRouter.route("/tour/:id").get(async (req, res) => {
  const id = req.params.id;
  const toursQuery = await getTourById(id); // Fetch the tour details by ID

  const tour = toursQuery.data; // Extract the data from the query result

  // Render the 'tours/tour' view with the selected tour details
  res.render("tours/tour", {
    tour: tour,
    user: req.user,
  });
});

// Booking

toursRouter.route("/booking").post(async (req, res) => {
  const { startDate, endDate, tourId } = req.body; // Extract booking details from the request body

  await makeTourBooking(req.user._id, tourId, {
    startDate: startDate,
    endDate: endDate,
    status: "pending",
  });

  res.status(200).json({
    status: "success",
    message: "Booking created successfully",
  });
});

module.exports = toursRouter;
