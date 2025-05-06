const express = require("express");
const {
  updateUser,
  getUserBookingsController,
} = require("../Controller/userController");
const {
  getHotelBookings,
  cancelBooking,
} = require("../Controller/bookingController");
const {
  getHotelIdsByOwnerId,
  addHotelIdToOwner,
} = require("../Controller/ownerController");
const {
  getUserAnalytics,
  getAdminHomepageAnalytics,
  getAdminPackagesAnalytics,
} = require("../Controller/analyticsController");
const {
  authenticateRole,
} = require("../middleware/authentication");

const dashboardRouter = express.Router();

// USER Dashboard Routes

dashboardRouter
  .route("/")
  .get(
    authenticateRole(["user", "admin", "hotelManager"]),
    async (req, res) => {
      const userAnalytics = await getUserAnalytics(req.user._id);

      console.log(userAnalytics);
      // Send User Dashboard

      res.render("dashboard/user/index", {
        user: req.user,
        userAnalytics,
      });
    }
  );

dashboardRouter
  .route("/myTrips")
  .get(
    authenticateRole(["user", "admin", "hotelManager"]),
    getUserBookingsController
  );

dashboardRouter
  .route("/settings")
  .get(
    authenticateRole(["user", "admin", "hotelManager"]),
    (req, res) => {
      // Send User Dashboard

      res.render("dashboard/user/settings", { user: req.user });
    }
  )
  .post(updateUser);

// ADMIN Dashboard

dashboardRouter
  .route("/admin")
  .get(authenticateRole(["admin"]), async (req, res) => {
    // Send Admin Dashboard

    const adminAnalytics = await getAdminHomepageAnalytics();

    res.render("dashboard/admin/index", {
      adminAnalytics,
    });
  });

dashboardRouter
  .route("/admin/analytics")
  .get(authenticateRole(["admin"]), (req, res) => {
    // Send Admin Dashboard
    res.render("dashboard/admin/analytics");
  });

dashboardRouter
  .route("/admin/customers")
  .get(authenticateRole(["admin"]), (req, res) => {
    // Send Admin Dashboard
    res.render("dashboard/admin/customers");
  });

dashboardRouter
  .route("/admin/hotelManagement")
  .get(authenticateRole(["admin"]), (req, res) => {
    // Send Admin Dashboard
    res.render("dashboard/admin/hotelManagement");
  });

dashboardRouter
  .route("/admin/packages")
  .get(authenticateRole(["admin"]), async (req, res) => {
    const packageAnalytics = await getAdminPackagesAnalytics();

    // Send Admin Dashboard
    res.render("dashboard/admin/packages", { packageAnalytics });
  });

dashboardRouter
  .route("/hotelManager")
  .get(authenticateRole(["hotelManager"]), (req, res) => {
    // Send Hotel Manager Dashboard
    res.render("dashboard/hotelManager/index");
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
        message: "Bookings fetched.",
        bookings: bookings.data,
      });
    } else {
      res.status(404).json({ message: "No bookings found" });
    }
  });

dashboardRouter
  .route("/hotelManager/booking")
  .get(authenticateRole(["hotelManager"]), (req, res) => {
    // Send Hotel Manager Dashboard
    res.render("dashboard/hotelManager/booking");
  });

dashboardRouter
  .route("/api/hotelManager/owner")
  .get(authenticateRole(["hotelManager"]), async (req, res) => {
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

dashboardRouter
  .route("/hotelManager/rooms")
  .get(authenticateRole(["hotelManager"]), (req, res) => {
    // Send Hotel Manager Dashboard
    res.render("dashboard/hotelManager/roomsIndex");
  });

dashboardRouter
  .route("/hotelManager/addRoom")
  .get(authenticateRole(["hotelManager"]), (req, res) => {
    // Send Hotel Manager Dashboard
    res.render("dashboard/hotelManager/roomsAdd");
  });

dashboardRouter
  .route("/api/bookings/cancel/:bookingId")
  .post(async (req, res) => {
    try {
      const { bookingId } = req.params;
      const result = await cancelBooking(bookingId);

      if (result.status === "success") {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: error.message });
    }
  });

module.exports = dashboardRouter;
