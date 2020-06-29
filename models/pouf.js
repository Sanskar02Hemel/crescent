const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const poufsSchema = new Schema({
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Poufs', poufsSchema);