const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const toursRouter = require("./routes/toursRouter");
const hotelsRouter = require("./routes/hotelsRouter");
const dashboardRouter = require("./routes/dashboardRouter");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming JSON requests
app.use(express.json());
app.use(morgan("tiny"));

// Define the root route
app.get("/", (req, res) => {
  res.sendFile("/html/index.html", { root: "public" });
});

app.get("/signUp", (req, res) => {
  res.sendFile("/html/auth/signUp.html", { root: "public" });
});

app.get("/signIn", (req, res) => {
  res.sendFile("/html/auth/signIn.html", { root: "public" });
});

// Use the tours router for routes starting with "/tours"
app.use("/tours", toursRouter);

// Use the hotels router for routes starting with "/hotels"
app.use("/hotels", hotelsRouter);

// Use the dashboard router for routes with "dashboard"
app.use("/dashboard", dashboardRouter);

const port = 5500;

// Start the server on port
const server = app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
