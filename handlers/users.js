const User = require("../models/user");

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
            message = 'User saved';
        }
        return(message)

    } catch (error) {
        console.error(error);
        return(error)
    }
}

module.exports = createUser;