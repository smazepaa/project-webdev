const express = require('express');
const router = express.Router();

const routes = require('../controllers/cookieControllers');

router.get('/set', routes.setCookies);
router.get('/get/:name', routes.getCookies);

module.exports = router;