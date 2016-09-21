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


exports.adminGet = function(req, res, next) {



};