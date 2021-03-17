const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Fetch main result
app.get("/totdata/:length", async (req, res) => {
  try {
    const { length } = req.params;
    const records = await pool.query("SELECT * FROM result WHERE length = $1 ORDER BY avgreturn DESC", [length]);
    res.json(records.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Fetch yearly data
app.get("/yeardata/:resid", async (req, res) => {
  try {
    const { resid } = req.params;
    const records = await pool.query("SELECT * FROM yearlyreturn WHERE resultid = $1 ORDER BY year ASC", [resid]);
    res.json(records.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Fetch selected data
app.get("/selected/:yearid", async (req, res) => {
  try {
    const { yearid } = req.params;
    const records = await pool.query("SELECT * FROM selectedstock WHERE yearlyid = $1 ORDER BY oneyearreturn DESC", [
      yearid,
    ]);
    res.json(records.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Listen port
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
