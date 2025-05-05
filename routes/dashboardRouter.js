const express = require("express");
const {
  updateUser,
  getUserBookingsController,
} = require("../Controller/userController");
const {
  getUserBookings,
  getHotelBookings,
} = require("../Controller/bookingController");
const {
  getHotelIdsByOwnerId,
  addHotelIdToOwner,
} = require("../Controller/ownerController");

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
  .route("/api/hotelManager/booking")
  .post(async (req, res) => {
    if (!req.user || req.user.role !== "hotelManager") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log(req.body);

    const { hotelId } = req.body;

    const bookings = await getHotelBookings(hotelId);

    if (bookings) {
      res.status(200).json({
        message: "Bookings fetched successfully",
        bookings: bookings.data,
      });
    } else {
      res.status(404).json({ message: "No bookings found" });
    }
  });

dashboardRouter
  .route("/hotelManager/booking")
  .get((req, res) => {
    // Send Hotel Manager Dashboard
    res.sendFile("/html/dashboard/hotelManager/booking.html", {
      root: "public",
    });
  });

dashboardRouter
  .route("/api/hotelManager/owner")
  .get(async (req, res) => {
    if (!req.user || req.user.role !== "hotelManager") {
      return res.status(401).json({ message: "Unauthorizrsed" });
    }

    const hotelIds = await getHotelIdsByOwnerId(req.user._id);
    if (hotelIds) {
      res.status(200).json({
        message: "Hotel IDs fetched successfully",
        hotelIds,
      });
    } else {
      res.status(404).json({ message: "No hotels found" });
    }
  })
  .post(async (req, res) => {
    const { hotelId } = req.body;
    const ownerId = req.user._id;

    if (!hotelId) {
      return res
        .status(400)
        .json({ message: "Hotel ID is required" });
    }

    const newOwner = await addHotelIdToOwner(ownerId, hotelId);

    if (newOwner) {
      res.status(201).json({
        message: "Hotel ID added successfully",
        newOwner,
      });
    } else {
      res.status(500).json({
        message: "Failed to add hotel ID",
      });
    }
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
