const User = require('../models/user');

async function listUsersHandler(req, res) {
    try {
        const users = await User.find(); // Use await to wait for the query to complete
        res.render('listUsers', { users: users });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = listUsersHandler;