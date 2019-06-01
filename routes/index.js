var express = require('express');
var router = express.Router();

 /* GET all customers. */
 router.get('/customers', function (req, res, next) {
      var db = require('../db');
      var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
      Customer.find({}).lean().exec(function(e,docs){
         res.json(docs);
         res.end();
      });
  });


  /* GET ONE customer. */
  router.get('/customers/:id', function (req, res, next) {
        var db = require('../db');
        var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
        Customer.find({ _id: req.params.id }).lean().exec(function (e, docs) {
            res.json(docs);
            res.end();
        });
    });


module.exports = router;
