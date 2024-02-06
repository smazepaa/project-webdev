const express = require('express');
const router = express.Router();

const showInfo = require('../controllers/homeControllers');

router.get('/', showInfo);

module.exports = router;