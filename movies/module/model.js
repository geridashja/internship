const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const Moviee = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        year:{
            type: Number,
            required: true
        }
    }
);

const Movie = mongoose.model('Movie', Moviee);
module.exports = Movie;
