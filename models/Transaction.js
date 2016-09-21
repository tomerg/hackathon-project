var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  recipient: String,
  amount: Number,
  country: String,
  payment: String
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;