const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Fetch main between year
app.get("/totdata/:length", async (req, res) => {
  try {
    const { length } = req.params;
    const { yearFrom, yearTo } = req.query;
    const totRecords = await pool.query("SELECT resultid, metrics FROM result WHERE length = $1", [length]);
    let recIds = [];
    for (idx in totRecords.rows) {
      recIds.push(totRecords.rows[idx].resultid);
    }

    const yearRecs = await pool.query(
      "SELECT resultid, metrics, avg(avgreturn) as avgreturn \
                                      FROM yearlyreturn \
                                      WHERE resultid = ANY ($1) \
                                      AND year >= $2 AND year <= $3 \
                                      GROUP BY resultid, metrics",
      [recIds, yearFrom, yearTo]
    );
    resRows = yearRecs.rows;
    resRows.sort((a, b) => (parseFloat(a.avgreturn) < parseFloat(b.avgreturn) ? 1 : -1));
    res.json(resRows);
  } catch (err) {
    console.error(err.message);
  }
});

// Fetch yearly data
app.get("/yeardata/:resid", async (req, res) => {
  try {
    const { resid } = req.params;
    const { yearFrom, yearTo } = req.query;
    const records = await pool.query(
      "SELECT * FROM yearlyreturn WHERE resultid = $1 and year >= $2 and year <= $3 ORDER BY year ASC",
      [resid, yearFrom, yearTo]
    );
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
