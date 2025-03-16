const Database = require("better-sqlite3");

const usersDatabase = new Database("usersDatabase.db", {
  verbose: console.log,
});

const query = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`;

usersDatabase.exec(query);

function insertUser(name, email, password) {
  try {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    const statement = usersDatabase.prepare(query);
    const info = statement.run(name, email, password);
    return info;
  } catch (err) {
    throw new Error(err);
  }
}

function getAllUsers() {
  const query = `SELECT * FROM users`;
  const statement = usersDatabase.prepare(query);
  const users = statement.all();
  return users;
}

function getUserByEmail(email) {
  const query = `SELECT * FROM users WHERE email = ?`;
  const statement = usersDatabase.prepare(query);
  const user = statement.get(email);
  return user;
}

module.exports = { insertUser, getAllUsers, getUserByEmail };
