const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const router = require('./routes/api');

dotenv.config({ path: './.env' });

const app = express(); 
app.use(express.json());
app.use('/api/v1', router);

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });

        app.locals.db = pool;

        console.log("DB Connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("DB connection error:", err);
    }
})();
