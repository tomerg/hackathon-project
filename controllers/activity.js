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
// var Transaction = require('../models/Transaction');
var Trans = require('../models/Trans');


exports.activityGet = function(req, res, next) {
console.log("Im in the router");
console.log(req);
 Trans.find(function(err, trans){
   if(err){ return next(err); }

   res.json(trans);
 });


};