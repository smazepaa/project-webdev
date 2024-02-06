const User = require("../models/user");
const handlers = require('../handlers/users');

async function getUserList(req, res) {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


function postUser(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;
    handlers(username, email, password, isAdmin)
        .then((message) => res.send(message))
        .catch(() => res.send('user NOT created'));
}

module.exports = {
    getUserList,
    postUser
};