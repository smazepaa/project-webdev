const User = require("../models/user");

// from hw5
async function createUser(username, email, password, isAdmin) {
    try {
        const existingUsername = await User.findOne({ username: username });
        const existingEmail = await User.findOne({ email: email });

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
            const newUser = new User({ username, email, password, isAdmin});
            await newUser.save();
            message = 'User created';
        }
        return(message)

    } catch (error) {
        console.error(error);
        return(error)
    }
}

// from practice Feb 2
async function updateUser(id, userData) {
    try {
        return await User.findOneAndUpdate({ _id: id }, { $set: userData });
    } catch (error) {
        console.error('error', error);
        return false;
    }
}

async function updateUserFields(id, userData) {
    try {
        return await User.findOneAndUpdate({ _id: id }, { $set: userData });
    } catch (error) {
        console.error('error', error);
        return false;
    }
}

module.exports = {
    createUser,
    updateUser,
    updateUserFields
};