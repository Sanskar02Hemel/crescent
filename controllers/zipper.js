const Zippers = require('../models/zipper');

exports.getZippers = (req, res, next) => {
    Zippers.find()
        .then((zippers) => {
            res.render('products/zippers', {
                zippers: zippers,
                pageTitle: 'Zippers',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
