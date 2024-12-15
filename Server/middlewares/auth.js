const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const auth = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(400).json({
      message: "Invalid token format. Expected format 'Bearer <token>'",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, email, } = decoded; 

    const userCheck = await pool.query(
      "SELECT id, email, firstname, lastname FROM users WHERE id = $1",
      [userId]
    );

    if (userCheck.rows.length === 0) {
      return res
        .status(401)
        .json({ message: "User not found or invalid token" });
    }

    req.user = {
      userId: userCheck.rows[0].id,
      email: userCheck.rows[0].email,
      firstname: userCheck.rows[0].firstname,
      lastname: userCheck.rows[0].lastname,
    };

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = auth;
