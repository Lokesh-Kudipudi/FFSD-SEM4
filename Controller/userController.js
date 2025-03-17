const {
  insertUser,
  getAllUsers,
  getUserByEmail,
  addAdmin,
} = require("../Model/usersModel");

// Function to handle user sign-up
function signUpUser(req, res) {
  try {
    const { name, email, password } = req.body;
    // Insert new user into the database
    insertUser(name, email, password);
    // Retrieve the newly created user by email
    const user = getUserByEmail(email);
    // Store user information in session
    req.session.user = user;
    // Send success response
    res.status(201).json({
      status: "success",
      message: "User created successfully",
    });
  } catch (err) {
    // Send failure response if user already exists
    res.status(400).json({
      status: "fail",
      message: "User already Exists!",
    });
  }
}

// Function to handle user sign-up
function signUphotelManager(req, res) {
  try {
    const { name, email, password } = req.body;

    // Insert new user into the database
    insertUser(name, email, password, "hotelManager");

    // Retrieve the newly created user by email
    const user = getUserByEmail(email);

    // Store user information in session
    req.session.user = user;

    // Send success response
    res.status(201).json({
      status: "success",
      message: "User created successfully",
    });
  } catch (err) {
    // Send failure response if user already exists
    res.status(400).json({
      status: "fail",
      message: "User already Exists!",
    });
  }
}

// Function to get all users
function getUsers(req, res) {
  try {
    // Retrieve all users from the database
    const users = getAllUsers();
    // Send success response with users data
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    // Send failure response if users not found
    res.status(400).json({
      status: "fail",
      message: "Users not found",
      error: err.message,
    });
  }
}

// Function to fetch user by email and password
function fetchUserByEmailPassword(req, res) {
  const { email, password } = req.body;

  // Retrieve user by email

  const user = getUserByEmail(email);

  if (!user) {
    // Send failure response if user not found
    res.status(404).json({
      status: "fail",
      message: "User not found",
    });
    return;
  }

  if (user.password !== password) {
    // Send failure response if password is invalid
    res.status(401).json({
      status: "fail",
      message: "Invalid password",
    });
    return;
  }

  // Store user information in session
  req.session.user = user;

  // Send success response with user data
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });

  return user;
}

function signUpAdmin(req, res) {
  try {
    const { name, email, password } = req.body;

    // Insert new user into the database
    addAdmin(name, email, password);

    // Retrieve the newly created user by email
    const user = getUserByEmail(email);

    // Store user information in session
    req.session.user = user;

    // Send success response
    res.status(201).json({
      status: "success",
      message: "User created successfully",
    });
  } catch (err) {
    // Send failure response if user already exists
    res.status(400).json({
      status: "fail",
      message: "User already Exists!",
    });
  }
}

module.exports = {
  signUpUser,
  signUphotelManager,
  signUpAdmin,
  getUsers,
  fetchUserByEmailPassword,
};
