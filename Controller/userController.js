const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../Model/userModel");

const JWT_SECRET = "your_jwt_secret"; // Use env var in production

// Helper to generate JWT
function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

// Sign up regular user
async function signUpUser(req, res) {
  const { fullName, email, password } = req.body;
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
      role: "user",
    });

    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
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
  const { fullName, email, password } = req.body;
  try {
    const existing = await mongoose
      .model("User")
      .findOne({ email });
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
      role: "hotelManager",
    });

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true, // Prevents JS access on client-side
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      status: "success",
      message: "Hotel Manager created successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
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
  const { fullName, email, password } = req.body;
  try {
    const existing = await mongoose
      .model("User")
      .findOne({ email });
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
      role: "admin",
    });

    const token = generateToken(user);
    res.status(201).json({
      status: "success",
      message: "Admin created successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
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

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
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
    const users = await mongoose
      .model("User")
      .find()
      .select("-passwordHash");
    res.status(200).json({
      status: "success",
      data: { users },
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: err.message });
  }
}

// Logout (handled client-side in JWT — optional server blacklist etc.)
function logout(req, res) {
  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
}

module.exports = {
  signUpUser,
  signUphotelManager,
  signUpAdmin,
  getUsers,
  fetchUserByEmailPassword,
  logout,
};
