const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hangingsSchema = new Schema({
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Hangings', hangingsSchema);