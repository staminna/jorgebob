var Product = require('../models/product');
var mongoose = require('mongoose');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res, next) {
    var product = new Product(
        {
            name: req.body.name,
            bags: req.body.bags
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Bags Created successfully')
    })
};

exports.product_details = function (req, res, next) {
    var valid = mongoose.Types.ObjectId.isValid(req.params.id);
    if(valid) {
        Product.findById(req.params.id, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
    }
};

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};