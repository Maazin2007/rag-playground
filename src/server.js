import app from "./app.js";
import { PORT } from "./config/env.js";
import pool from "./db/index.js";

try {
    // test the connection to the database
    const result = await pool.query("SELECT NOW()");
    console.log(`✅ Connected to the database at ${result.rows[0].now} ✅`);
    // start the server
    app.listen(PORT, () => {
        // log the server is running
        console.log(`Server is running on http://localhost:${PORT} ✅`);
    });
} catch (err) {
    // if the connection is unsuccessful, log an error and exit the process
    console.error("❌ Error connecting to the database");
    // exit the process with a status code of 1
    process.exit(1);
}
