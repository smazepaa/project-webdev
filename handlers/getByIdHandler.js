const User = require('../models/user');

async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        res.render('userDetails', { user: user });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getUserById;