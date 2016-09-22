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

  req.user.populate('transactions', function(err, user) {
    if (err) { return next(err); }

    res.json(req.user);
  });

// Find all transactions then loop through all transactions and create a new object with the 
 // only the amount property and send it back to the client
 //Transaction.find({}).exec(function(err, data){
  // var resObj = []
//  for(var i = 0; i < data.length; i ++){
    // var newObj = {data: data[i].amount}
    // resObj.push(newObj)

// }
  // res.json(resObj)
 // })
// }

};


exports.transAmtGet = function(req, res, next) {

  Transaction.find('amount', function(err, transaction){
    if (err) {return handleError(err)};
    
    console.log(transaction)
    // console.log('Transaction Amount', transaction[0].amount);
    // for (var i = 0 ; i < transaction.length ; i++){
    //   console.log("this shit", i)
    //   res.json(transaction[i].amount)
    // }
    

  });

  // req.user.populate('transactions').populate('amount').exec(function(err, amount){
  //   if (err) { return next(err); }
  //   console.log(amount);
  //   res.json(amount);
  //   // res.send(amount);
  // })

};



