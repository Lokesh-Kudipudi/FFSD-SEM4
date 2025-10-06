const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const toursRouter = require("./routes/toursRouter");
const hotelsRouter = require("./routes/hotelsRouter");
const dashboardRouter = require("./routes/dashboardRouter");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const {
  authenticateUser,
  authenticateRole,
} = require("./middleware/authentication");
const { userRouter } = require("./routes/userRouter");
const { autoSignIn } = require("./middleware/autoSignIn");
const { createContactForm } = require("./Controller/contactController");
dotenv.config();

// Set EJS as the templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Cookie Parser
app.use(cookieParser());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming JSON requests
app.use(express.json());
app.use(morgan("dev"));

app.use(autoSignIn);

// Define the root route
app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

// Define the route for the contact page
app
  .route("/contact")
  .get((req, res) => {
    res.sendFile("/html/contact.html", { root: "public" });
  })
  .post(async (req, res) => {
    const { name, email, phone, reason, query } = req.body;

    await createContactForm({
      name,
      email,
      phone,
      reason,
      query,
    });

    res.json({
      message: "Contact form submitted successfully",
      data: { name, email, phone, reason, query },
    });
  });

app.use("/", userRouter);

// Use the tours router for routes starting with "/tours"
app.use("/tours", toursRouter);

// Use the hotels router for routes starting with "/hotels"
app.use("/hotels", hotelsRouter);

// Use the dashboard router for routes with "dashboard"
app.use("/dashboard", authenticateUser, dashboardRouter);

async function connectMongoose() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}

connectMongoose();

app.listen(process.env.PORT || 5500, () => {
  console.log("Server is running on port 5500");
});
