var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
var sass = require('node-sass-middleware');

// Load environment variables from .env file
dotenv.load();

// Models
var User = require('./models/User');
var Transaction = require('./models/Transaction');
var Trans = require('./models/Transaction');

// Controllers
var userController = require('./controllers/user');
var contactController = require('./controllers/contact');
var transactionController = require('./controllers/transaction');
var activityController = require('./controllers/activity');

var app = express();

// mongoose.connect('mongodb://localhost/wirecash');

mongoose.connect(process.env.MONGOLAB_IVORY_URI || 'mongodb://localhost/wirecash');
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(sass({ src: path.join(__dirname, 'public'), dest: path.join(__dirname, 'public') }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  req.isAuthenticated = function() {
    var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  };

  if (req.isAuthenticated()) {
    var payload = req.isAuthenticated();
    User.findById(payload.sub, function(err, user) {
      req.user = user;
      next();
    });
  } else {
    next();
  }
});

app.param('user', function(req, res, next, id) {
 var query = User.findById(id);

 query.exec(function (err, user){
   if (err) { return next(err); }
   if (!user) { return next(new Error('can\'t find user')); }

   req.user = user;
   return next();
 });
});

app.param('transaction', function(req, res, next, id) {
 var query = Transactions.findById(id);

 query.exec(function (err, transactions){
   if (err) { return next(err); }
   if (!transaction) { return next(new Error('can\'t find transactions')); }

   req.transaction = transaction;
   return next();
 });
});

app.post('/contact', contactController.contactPost);
app.put('/account', userController.ensureAuthenticated, userController.accountPut);
app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
app.post('/signup', userController.signupPost);
app.post('/login', userController.loginPost);
app.post('/forgot', userController.forgotPost);
app.post('/reset/:token', userController.resetPost);
app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
app.post('/auth/facebook', userController.authFacebook);
app.get('/auth/facebook/callback', userController.authFacebookCallback);
app.post('/transaction', transactionController.transactionPost);
app.get('/transaction/:user', transactionController.transactionGet);
app.get('/trans', activityController.activityGet);
// app.get('/admin', adminController.adminGet);
app.get('/gettransaction/:user', transactionController.transAmtGet);

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
