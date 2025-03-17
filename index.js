const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const session = require("express-session");
const toursRouter = require("./routes/toursRouter");
const hotelsRouter = require("./routes/hotelsRouter");
const dashboardRouter = require("./routes/dashboardRouter");
const {
  signUpUser,
  signUphotelManager,
  signUpAdmin,
  getUsers,
  fetchUserByEmailPassword,
  logout,
} = require("./Controller/userController");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Implement Sessions
app.use(
  session({
    secret: "ChasingHorizons", // Change this to a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming JSON requests
app.use(express.json());
app.use(morgan("tiny"));

// Define the root route
app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });
});

// Define the route for the contact page
app.route("/contact").get((req, res) => {
  res.sendFile("/html/contact.html", { root: "public" });
});

// Define the route for the sign-up page and handle sign-up form submission
app
  .route("/signUp")
  .get((req, res) => {
    res.sendFile("/html/auth/signUp.html", { root: "public" });
  })
  .post(signUpUser);

// Define the route for hotel manager sign-up page and handle sign-up form submission
app
  .route("/signUpHotelManager")
  .get((req, res) => {
    res.sendFile("/html/auth/signUpHotelManager.html", {
      root: "public",
    });
  })
  .post(signUphotelManager);

// Define the route for the sign-in page and handle sign-in form submission
app
  .route("/signIn")
  .get((req, res) => {
    res.sendFile("/html/auth/signIn.html", { root: "public" });
  })
  .post(fetchUserByEmailPassword);

// Define the route for the sign-out
app.route("/logout").get(logout);

// Define the route to get all users
app.route("/users").get(getUsers).post(signUpAdmin);

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
