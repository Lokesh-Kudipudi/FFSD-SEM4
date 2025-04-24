const express = require("express");
const {
  updateUser,
  getUserBookingsController,
} = require("../Controller/userController");
const {
  getUserBookings,
} = require("../Controller/bookingController");

const dashboardRouter = express.Router();

// USER Dashboard Routes

dashboardRouter.route("/").get((req, res) => {
  // Send User Dashboard

  res.render("dashboard/user/index", { user: req.user });
});

dashboardRouter.route("/myTrips").get(getUserBookingsController);

dashboardRouter
  .route("/settings")
  .get((req, res) => {
    // Send User Dashboard

    res.render("dashboard/user/settings", { user: req.user });
  })
  .post(updateUser);

// ADMIN Dashboard

dashboardRouter.route("/admin").get((req, res) => {
  // Send Admin Dashboard
  res.sendFile("/html/dashboard/admin/index.html", {
    root: "public",
  });
});

dashboardRouter.route("/admin/analytics").get((req, res) => {
  // Send Admin Dashboard
  res.sendFile("/html/dashboard/admin/analytics.html", {
    root: "public",
  });
});

dashboardRouter.route("/admin/customers").get((req, res) => {
  // Send Admin Dashboard
  res.sendFile("/html/dashboard/admin/customers.html", {
    root: "public",
  });
});

dashboardRouter
  .route("/admin/hotelManagement")
  .get((req, res) => {
    // Send Admin Dashboard
    res.sendFile("/html/dashboard/admin/hotelManagement.html", {
      root: "public",
    });
  });

dashboardRouter.route("/admin/packages").get((req, res) => {
  // Send Admin Dashboard
  res.sendFile("/html/dashboard/admin/packages.html", {
    root: "public",
  });
});

dashboardRouter.route("/hotelManager").get((req, res) => {
  // Send Hotel Manager Dashboard
  res.sendFile("/html/dashboard/hotelManager/index.html", {
    root: "public",
  });
});

dashboardRouter
  .route("/hotelManager/booking")
  .get((req, res) => {
    // Send Hotel Manager Dashboard
    res.sendFile("/html/dashboard/hotelManager/booking.html", {
      root: "public",
    });
  });

dashboardRouter.route("/hotelManager/rooms").get((req, res) => {
  // Send Hotel Manager Dashboard
  res.sendFile("/html/dashboard/hotelManager/roomsIndex.html", {
    root: "public",
  });
});

dashboardRouter
  .route("/hotelManager/addRoom")
  .get((req, res) => {
    // Send Hotel Manager Dashboard
    res.sendFile("/html/dashboard/hotelManager/roomsAdd.html", {
      root: "public",
    });
  });

module.exports = dashboardRouter;
