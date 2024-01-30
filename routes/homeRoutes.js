const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');


router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Use await to wait for the query to complete
        res.render('listUsers', { users: users });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/new', (req, res) => {
    res.render('form');
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.render('userDetails', { user: user });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const existingUsername = await User.findOne({ username: req.body.username });
        const existingEmail = await User.findOne({ email: req.body.email });

        if (existingUsername && existingEmail) {
            let message = 'User with the same username and email already exists';
            console.log(message);
            //return res.redirect('/new'); // Redirect back to the form
            return res.send(message)
        }
        else if (existingUsername) {
            let message = 'User with the same username already exists';
            console.log(message);
            //return res.redirect('/new'); // Redirect back to the form
            return res.send(message)
        }
        else if (existingEmail) {
            let message = 'User with the same email already exists';
            console.log(message);
            //return res.redirect('/new'); // Redirect back to the form
            return res.send(message)
        }

        const newUser = new User(req.body);
        await newUser.save();
        console.log('User saved');
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;