const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Testing" });
});

app.get("/tours", (req, res) => {
  res.render("tours/index", { name: "Testing" });
});

const server = app.listen("5500", () => {
  console.log("Server Started");
});
