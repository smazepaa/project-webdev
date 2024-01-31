const User = require('../models/user');

async function createUserHandler(req, res) {
    try {
        const existingUsername = await User.findOne({ username: req.body.username });
        const existingEmail = await User.findOne({ email: req.body.email });

        let baseMessage = 'User with the same';
        let message = '';

        if (existingUsername && existingEmail) {
            message = `${baseMessage} username and email already exists`;
        }
        else if (existingUsername) {
            message = `${baseMessage} username already exists`;
        }
        else if (existingEmail) {
            message = `${baseMessage} email already exists`;
        }
        else {
            const newUser = new User(req.body);
            await newUser.save();
            message = 'User saved';
        }

        console.log(message);
        // Send the message and include a button to go back to the list
        res.send(`
        <p>${message}</p>
        <a href="/">Go Back to User List</a>
    `);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = createUserHandler;