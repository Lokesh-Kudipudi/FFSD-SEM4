const Database = require("better-sqlite3");

// Initialize the database connection
const usersDatabase = new Database("usersDatabase.db", {
  verbose: console.log,
});

// SQL query to create the users table if it doesn't exist
const query = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'user'
  )`;

// Execute the query to create the table
usersDatabase.exec(query);

// Function to insert a new user into the database
function insertUser(name, email, password, type = "user") {
  try {
    // SQL query to insert a new user
    const query = `INSERT INTO users (name, email, password, type) VALUES (?, ?, ?, ?)`;
    const statement = usersDatabase.prepare(query);

    // Execute the query with the provided parameters
    const info = statement.run(name, email, password, type);
    return info;
  } catch (err) {
    // Throw an error if something goes wrong
    throw new Error(err);
  }
}

function addAdmin(name, email, password, type = "admin") {
  try {
    // SQL query to insert a new user
    const query = `INSERT INTO users (name, email, password, type) VALUES (?, ?, ?, ?)`;
    const statement = usersDatabase.prepare(query);

    // Execute the query with the provided parameters
    const info = statement.run(name, email, password, type);
    return info;
  } catch (err) {
    // Throw an error if something goes wrong
    throw new Error(err);
  }
}

// Function to retrieve all users from the database
function getAllUsers() {
  // SQL query to select all users
  const query = `SELECT * FROM users`;
  const statement = usersDatabase.prepare(query);
  // Execute the query and return the result
  const users = statement.all();
  return users;
}

// Function to retrieve a user by email
function getUserByEmail(email) {
  // SQL query to select a user by email
  const query = `SELECT * FROM users WHERE email = ?`;
  const statement = usersDatabase.prepare(query);
  // Execute the query with the provided email and return the result
  const user = statement.get(email);
  return user;
}

// Export the functions for use in other modules
module.exports = {
  insertUser,
  getAllUsers,
  getUserByEmail,
  addAdmin,
};
