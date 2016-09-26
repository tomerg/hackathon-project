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
    // console.log("I got the user", req.user.id);
    // console.log(req.user);
    res.json(req.user);
  });

};


exports.transAmtGet = function(req, res, next) {

  Transaction.find(function(err, transaction){
    if (err) {return handleError(err)};
    //console.log('Transaction Amount', transaction[0].amount);
    var transactions = [];

    for (var i = 0 ; i < transaction.length; i++){
      transactions.push(transaction[i].amount);
    }

    res.send(transactions);
    

  });

};



