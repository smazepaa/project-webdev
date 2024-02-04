const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Audio = require('./audio');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    isAdmin: Boolean,
    audios: [Audio] // for storing history of transcripts
});

const User = mongoose.model('User', userSchema);

module.exports = User;