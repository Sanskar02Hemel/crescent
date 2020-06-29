const Hangings = require('../models/hanging');

exports.getHangings = (req, res, next) => {
    Hangings.find()
        .then((hangings) => {
            res.render('products/hangings', {
                hangings: hangings,
                pageTitle: 'Hangings',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};