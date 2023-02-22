const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailySavingsSchema = new Schema({
  goalName: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  goalDate: { type: Date, required: true },
  dailySavings: { type: Number, required: true },
}, {
  timestamps: false,
});

const dailySavings = mongoose.model('Daily Savings', dailySavingsSchema);

module.exports = dailySavings;