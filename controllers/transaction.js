var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
var qs = require('querystring');

var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Transaction = require('../models/Transaction');

// router.param('user', function(req, res, next, id) {
//   console.log('here!')

//   var query = User.findById(id);

//   query.exec(function (err, user){
//     if (err) { return next(err); }
//     if (!user) { return next(new Error('can\'t find user')); }

//     req.user = user;
//     return next();
//   });
// });


exports.transactionPost = function(req, res, next) {

  var transaction = new Transaction({
    user: req.user.id,
    recipient: req.body.recipient,
    amount: req.body.amount,
    country: req.body.country,
    payment: req.body.payment
  });

  transaction.save(function (err, trans){
    if(err){ return next(err); }
    res.json(trans);
  });

  req.user.transactions.push(transaction);

  req.user.save();

  console.log(req.user);

};

exports.transactionGet = function(req, res, next) {

  // User.findById(req.user.id, function(err, user) {
  //   return (req.params.user) 
  //     req.user.populate('transactions', function(err, user) {
  //       if (err) { return next(err); }

  //       res.json(user);
  //     });
    
  // });

  // req.user.populate('transactions', function(err, user) {
  //   if (err) { return next(err); }

  //   res.json(user);
  // });

};