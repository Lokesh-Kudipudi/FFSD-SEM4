const app = require("../app");

module.exports = (req, res) => {
  app(req, res); // use Express as a serverless function
};
