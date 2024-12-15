const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const auth = require("../middlewares/auth");
const { Pool } = require("pg");

const app = express();
const neonUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

app.use(
  express.static(path.join(__dirname, "../../Client/Excelexchange/dist"))
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Client/Excelexchange/dist", "index.html")
  );
});

console.log("Connecting to Neon...");
const pool = new Pool({
  connectionString: neonUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client from Neon", err.stack);
  }
  console.log("Connected to Neon Database");
  client.release();
});

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`;

pool.query(createUserTableQuery).catch(console.error);

app.post("/api/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUserCheck = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUserCheck.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)",
      [firstname, lastname, email, hashedPassword]
    );

    const user = await pool.query(
      "SELECT id, firstname, lastname, email FROM users WHERE email = $1",
      [email]
    );

    const token = jwt.sign(
      {
        userId: user.rows[0].id,
        email: user.rows[0].email,
        firstname: user.rows[0].firstname,
        lastname: user.rows[0].lastname,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(
      "SELECT id, firstname, lastname, email, password FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.rows[0].password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    const token = jwt.sign(
      {
        userId: user.rows[0].id,
        email: user.rows[0].email,
        firstname: user.rows[0].firstname,
        lastname: user.rows[0].lastname,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/users", auth, async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT id, firstname, lastname, email FROM users"
    );
    res.status(200).json(users.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/user/me", auth, async (req, res) => {
  try {
    // Assuming `req.user.userId` is available from your auth middleware
    const user = await pool.query(
      "SELECT id, firstname, lastname, email FROM users WHERE id = $1",
      [req.user.userId]
    );

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/delete", auth, async (req, res) => {
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [req.user.userId]);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
