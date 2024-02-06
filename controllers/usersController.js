const User = require("../models/user");
const { createUser, updateUser, updateUserFields } = require('../handlers/users');

// from hw5
async function getUserList(req, res) {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).send('User NOT Found');
    }
}


// from practice Feb 2
function postUser(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;
    createUser(username, email, password, isAdmin)
        .then((message) => res.send(message))
        .catch(() => res.status(500).send('User NOT Created'));
}

async function deleteUser(req, res) {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.send('User Deleted');
    } catch (error) {
        res.status(500).send('User NOT Deleted');
    }
}

function putUser(req, res) {
    const userId = req.params.id;
    const userObj = {};
    userObj.username = req.body.username;
    userObj.email = req.body.email;
    userObj.password = req.body.password;
    userObj.isAdmin = req.body.isAdmin;
    
    updateUser(userId, userObj)
        .then(() => res.send('User Updated'))
        .catch(() => res.send('User NOT Updated'));
}

async function patchUser(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    updateUserFields(userId, userData)
        .then(() => res.send('User Field(s) Updated'))
        .catch(() => res.send('User NOT Updated'));
}


module.exports = {
    getUserList,
    postUser,
    getUserById,
    deleteUser,
    putUser,
    patchUser,
};