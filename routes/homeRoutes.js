const express = require('express');
const router = express.Router();

const listHandler = require('../handlers/userListHandler');
const idHandler = require('../handlers/getByIdHandler');
const createHandler = require('../handlers/createUserHandler');

router.get('/', listHandler);

router.get('/new', (req, res) => {
    res.render('form');
});

router.get('/:id', idHandler);

router.post('/', createHandler);

module.exports = router;