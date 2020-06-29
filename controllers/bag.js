const Bags = require('../models/bag');

exports.getBags = (req, res, next) => {
    Bags.find()
        .then((bags) => {
            res.render('products/bags', {
                bags: bags,
                pageTitle: 'Bags',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
