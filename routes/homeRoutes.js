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

router.post('/', async (req, res) => {
    try {
        const existingUsername = await User.findOne({ username: req.body.username });
        const existingEmail = await User.findOne({ email: req.body.email });

        if (existingUsername && existingEmail) {
            console.log('User with the same username and email already exists');
            //return res.redirect('/new'); // Redirect back to the form
            return res.send('User with the same username and email already exists')
        }
        else if (existingUsername) {
            console.log('User with the same username already exists');
            // return res.redirect('/new'); // Redirect back to the form
            return res.send('User with the same username already exists')
        }
        else if (existingEmail) {
            console.log('User with the same email already exists');
            //return res.redirect('/new'); // Redirect back to the form
            return res.send('User with the same email already exists')
        }

        // Create and save the new user if no duplicates are found
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
