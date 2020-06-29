const Storages = require('../models/storage');

exports.getStorages = (req, res, next) => {
    Storages.find()
        .then((storages) => {
            res.render('products/storages', {
                storages: storages,
                pageTitle: 'Storages',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
