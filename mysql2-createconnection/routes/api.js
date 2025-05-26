const express = require('express');
const { demo } = require('../controllers/user');
const router = express.Router();

router.post('/demo', demo);

module.exports = router;
