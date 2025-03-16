const {
  insertUser,
  getAllUsers,
  getUserByEmail,
} = require("../Model/usersModel");

function signUp(req, res) {
  try {
    const { name, email, password } = req.body;
    insertUser(name, email, password);
    const user = getUserByEmail(email);
    req.session.user = user;
    res.status(201).json({
      status: "success",
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "User already Exists!",
    });
  }
}

function getUsers(req, res) {
  try {
    const users = getAllUsers();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Users not found",
      error: err.message,
    });
  }
}

function fetchUserByEmailPassword(req, res) {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!user) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }

  if (user.password !== password) {
    res.status(401).json({
      status: "fail",
      message: "Invalid password",
    });
  }

  req.session.user = user;

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });

  return user;
}

module.exports = { signUp, getUsers, fetchUserByEmailPassword };
