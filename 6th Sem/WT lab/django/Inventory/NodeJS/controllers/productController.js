const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Product } = require('../models/products');

router.get('/total_count', (req, res) => {
    Product.aggregate([{
        $group: {
            _id: null,
            totalCount: { $sum: "$quantity" },
           count: { $sum: 1 }
        }
    }], (err, docs) => {
        if (!err) {
            res.send(docs);
            console.table(docs);
        } else {
            console.log('Error in retrieving Stats: ' + JSON.stringify(err, undefined, 2));
        }
    });
});


router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/',(req, res) => {
    console.log("HERE ");
    console.log(res);
    var prod = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var prod = {
        name: req.body.name,
        quantity: req.body.quantity,
    };
    Product.findByIdAndUpdate(req.params.id, { $set: prod }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;