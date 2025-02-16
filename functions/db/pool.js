const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "ryan",
  database: "messages",
  port: 5432 
});