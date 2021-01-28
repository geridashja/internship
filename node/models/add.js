const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fill_schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Credentials = mongoose.model('Credentials', fill_schema);
module.exports = Credentials;