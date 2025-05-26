const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/api');
const mysql = require('mysql2/promise');

const app = express();
dotenv.config({ path: './.env' });

app.use(express.json());
app.use('/api/v1', router);

// MySQL connection
const PORT = process.env.PORT || 8000;

(async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        console.log("DB Connected");

        // Make connection available globally
        app.locals.db = connection;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("DB connection error:", err);
    }
})();
