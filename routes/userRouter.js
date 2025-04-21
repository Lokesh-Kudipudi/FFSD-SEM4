const express = require("express");
const {
  signUpUser,
  signUphotelManager,
  signUpAdmin,
  getUsers,
  fetchUserByEmailPassword,
  logout,
} = require("../Controller/userController");

const userRouter = express.Router();

// Define the route for the sign-up page and handle sign-up form submission
userRouter
  .route("/signUp")
  .get((req, res) => {
    res.sendFile("/html/auth/signUp.html", { root: "public" });
  })
  .post(signUpUser);

// Define the route for hotel manager sign-up page and handle sign-up form submission
userRouter
  .route("/signUpHotelManager")
  .get((req, res) => {
    res.sendFile("/html/auth/signUpHotelManager.html", {
      root: "public",
    });
  })
  .post(signUphotelManager);

// Define the route for the sign-in page and handle sign-in form submission
userRouter
  .route("/signIn")
  .get((req, res) => {
    res.sendFile("/html/auth/signIn.html", { root: "public" });
  })
  .post(fetchUserByEmailPassword);

// Define the route for the sign-out
userRouter.route("/logout").get(logout);

// Define the route to get all users
userRouter.route("/users").get(getUsers).post(signUpAdmin);

module.exports = { userRouter };
