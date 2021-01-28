const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoschema = new Schema({
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

const Info = mongoose.model('Info', infoschema);
module.exports = Info;