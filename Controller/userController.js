const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../Model/userModel");
const { Hotel } = require("../Model/hotelModel");
const { Booking } = require("../Model/bookingModel");
const { Review } = require("../Model/reviewModel");
const { Payment } = require("../Model/paymentModel");
const { Tour } = require("../Model/tourModel");
const { getUserBookings } = require("./bookingController");

// Helper to generate JWT
function generateToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
      phone: user.phone,
      address: user.address,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

// Sign up regular user
async function signUpUser(req, res) {
  const { fullName, email, password, phone, address } = req.body;
  try {
    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists!",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      fullName,
      email,
      phone,
      address,
      passwordHash,
      role: "user",
    });

    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    req.user = user; // Attach user to request for further use

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// Sign up hotel manager
async function signUphotelManager(req, res) {
  const { fullName, email, password, phone, address } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists!",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      fullName,
      email,
      passwordHash,
      phone,
      address,
      role: "hotelManager",
    });

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    req.user = user; // Attach user to request for further use

    res.status(201).json({
      status: "success",
      message: "Hotel Manager created successfully",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// Sign up admin
async function signUpAdmin(req, res) {
  const { fullName, email, password, phone, address } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists!",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      fullName,
      email,
      passwordHash,
      phone,
      address,
      role: "admin",
    });

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    req.user = user; // Attach user to request for further use

    res.status(201).json({
      status: "success",
      message: "Admin created successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// User login
async function fetchUserByEmailPassword(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    const valid = await bcrypt.compare(
      password,
      user.passwordHash
    );
    if (!valid) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid password" });
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    req.user = user; // Attach user to request for further use

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// Get all users (admin use)
async function getUsers(req, res) {
  try {
    const users = await User.find().select("-passwordHash");

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// Update User

async function updateUser(req, res) {
  const { fullName, email, phone, address } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.address = address || user.address;
    await user.save();

    const token = generateToken(user);

    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
    });

    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    req.user = user;

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// Logout (handled client-side in JWT — optional server blacklist etc.)
function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  });

  req.user = null;

  res.redirect("/");
}

async function getUserBookingsController(req, res) {
  // Send User Dashboard
  try {
    const bookings = await getUserBookings(req.user._id);

    if (bookings.status == "error") {
      throw new Error(`${bookings.message}`);
    }

    res.render("dashboard/user/myTrips", {
      user: req.user,
      bookings: bookings.data,
    });
  } catch (error) {
    res.render("dashboard/user/myTrips", {
      user: req.user,
      bookings: [],
    });
  }
}

module.exports = {
  signUpUser,
  signUphotelManager,
  signUpAdmin,
  getUsers,
  fetchUserByEmailPassword,
  logout,
  updateUser,
  getUserBookingsController,
};
