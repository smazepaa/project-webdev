const express = require('express');
const router = express.Router();

const routes = require('../controllers/headerControllers');

router.get('/set', routes.setHeaders);
router.get('/get/:name', routes.getHeaders);

module.exports = router;