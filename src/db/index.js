// this file handles the connection to the database
import pg from "pg";
import { DATABASE_URL } from "../config/env.js";

// using the pg module to create a pool of connections to the database
const { Pool } = pg;
// create a pool of connections to the database
const pool = new Pool({
    connectionString: DATABASE_URL,
    // production-safe settings
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});

// export the pool
export default pool;