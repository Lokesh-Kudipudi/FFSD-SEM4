const express = require("express"); // Import the express module

const hotelsRouter = express.Router(); // Create a new router object

// Define a route for the root path of the hotelsRouter
hotelsRouter.route("/").get((req, res) => {
  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/index", { name: "Testing" });
});

module.exports = hotelsRouter; // Export the router object
