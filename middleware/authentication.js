const jwt = require("jsonwebtoken");

// Replace this with your actual secret (keep it safe!)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

function authenticateUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded user info to request
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired token",
    });
  }
}

module.exports = { authenticateUser };
