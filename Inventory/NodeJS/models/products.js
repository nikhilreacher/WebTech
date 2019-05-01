const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    name: {type: String},
    quantity: {type: Number}
});

module.exports = { Product };