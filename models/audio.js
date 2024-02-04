const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema({
    audioFile: String, // later maybe will be changed
    transcript: String, 
    dateAdded: String
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;