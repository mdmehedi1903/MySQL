const express = require("express");
const router = express.Router();
const { demo } = require("../controllers/user");

router.post("/users", demo);

module.exports = router;
