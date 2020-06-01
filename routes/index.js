const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET home page. */
router.get('/', flightsCtrl.index);

module.exports = router;
