const express = require("express");
const path = require("path");
const app = express();
const toursRouter = require("./routes/toursRouter");
const hotelsRouter = require("./routes/hotelsRouter");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming JSON requests
app.use(express.json());

// Define the root route
app.get("/", (req, res) => {
  res.render("index", { name: "Testing" });
});

// Use the tours router for routes starting with "/tours"
app.use("/tours", toursRouter);

// Use the hotels router for routes starting with "/hotels"
app.use("/hotels", hotelsRouter);

// Start the server on port 5500
const server = app.listen("5500", () => {
  console.log("Server Started");
});
