const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Easy-Money1",
  host: "localhost",
  port: 5432,
  database: "MetricComparison",
});

module.exports = pool;
