const express = require('express');
const router = express.Router();
const User = require('../models/user');


const listHandler = require('../handlers/userListHandler');
router.get('/', listHandler);

router.get('/new', (req, res) => {
    res.render('form');
});

const idHandler = require('../handlers/getByIdHandler');
router.get('/:id', idHandler);

const createHandler = require('../handlers/createUserHandler');
router.post('/', createHandler);

module.exports = router;