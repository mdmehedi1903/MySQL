// index.js
require('dotenv').config()
const express = require("express");
const app = express();
const sequelize = require("./db");
const userRoutes = require("./routes/api");


app.use(express.json());

// Routes
app.use("/api", userRoutes); 

// Sequelize connection check and sync
sequelize.authenticate()
  .then(() => {
    console.log("✅ DB connected");
    return sequelize.sync(); // auto-create table from models
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ DB connection failed:", err);
  });
