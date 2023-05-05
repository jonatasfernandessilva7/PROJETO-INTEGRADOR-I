const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "slufc",
    port: 5432,
    password: "postgres"
});

module.exports = pool;