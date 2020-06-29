const Poufs = require('../models/pouf');

exports.getPoufs = (req, res, next) => {
    Poufs.find()
        .then((poufs) => {
            res.render('products/poufs', {
                poufs: poufs,
                pageTitle: 'Poufs',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
