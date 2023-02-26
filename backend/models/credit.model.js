const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const creditSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Credit = mongoose.model('Credit', creditSchema);

module.exports = Credit;