const express = require("express");

// Create a new router object
const toursRouter = express.Router();

// Define route for the root path of tours
toursRouter.route("/").get((req, res) => {
  // Render the 'tours/index' view with a name variable
  res.render("tours/index", { name: "Testing" });
});

// Define route for the search path of tours
toursRouter.route("/search").get((req, res) => {
  const searchParam = req.query;
  console.log(searchParam);
  // Render the 'tours/tours' view
  res.render("tours/tours", { tours: [{ name: "hello" }] });
});

const tour = {
  tour_id: "T12345", //
  title: "Grand European Adventure", //
  tags: ["In-depth Cultural", "Group", "Fully Guided"], //
  images: [
    "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
  ], //
  duration: "14 days", //
  startLocation: "Vijayawada", //
  description:
    "Explore the best of Europe with this 15-day guided tour covering iconic cities, breathtaking landscapes, and cultural heritage sites.", //
  language: "Telugu",
  price: {
    currency: "INR", //
    amount: 3500, //
    discount: 0.2, //
  },
  includes: [
    "Accommodation",
    "Daily breakfast & selected meals",
    "Guided sightseeing tours",
    "Airport transfers",
    "Transport between cities",
  ], //
  destinations: [
    {
      name: "London, United Kingdom",
      image:
        "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
    {
      name: "Paris, France",
      image:
        "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
    {
      name: "Rome, Italy",
      image:
        "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
  ], //
  itinerary: [
    {
      day: 1,
      location: "London",
      activities: [
        "Arrive in London and check in to the hotel",
        "Evening Thames River Cruise",
        "Welcome Dinner at a traditional British restaurant",
      ],
    },
    {
      day: 2,
      location: "London",
      activities: [
        "Guided city tour covering Buckingham Palace, Big Ben, and Westminster Abbey",
        "Afternoon at the British Museum",
        "Evening at leisure in Covent Garden",
      ],
    },
    {
      day: 3,
      location: "Paris",
      activities: [
        "Morning Eurostar train to Paris",
        "Visit the Eiffel Tower and Champ de Mars",
        "Evening Seine River Cruise",
      ],
    },
  ], //
  guides: {
    type: "Professional English-speaking guides",
    available_languages: [
      "English",
      "French",
      "Italian",
      "Spanish",
    ],
  },
  availableMonths: ["April 2025", "May 2025", "June 2025"],
  bookingDetails: [
    {
      startDate: "16 March 2025",
      startDay: "Sunday",
      endDate: "20 March 2025",
      endDay: "Thursday",
      status: "Filling Fast",
      discount: 0.2,
    },
    // {
    //   startDate: "19 March 2025",
    //   status: "Filling Fast",
    //   discount: 0.2,
    // },
    // {
    //   startDate: "25 March 2025",
    //   status: "Filling Fast",
    //   discount: 0.2,
    // },
  ],
};

// Define route
toursRouter.route("/tour/:id").get((req, res) => {
  res.render("tours/tour", { tour: tour });
});

module.exports = toursRouter;
