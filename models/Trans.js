var mongoose = require('mongoose');

var transSchema = new mongoose.Schema({
  recipient: String,
  amount: String,
  country: String,
  payment: String
});

var Trans = mongoose.model('Trans', transSchema);

module.exports = Trans;