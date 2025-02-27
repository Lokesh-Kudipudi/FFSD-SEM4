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
  res.render("tours/tours");
});

// Define route
toursRouter.route("/tours/:id").get((req, res) => {
  res.render("tours/tour");
});

module.exports = toursRouter;
