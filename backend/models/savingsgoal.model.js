const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const savingsGoalSchema = new Schema({
  goalName: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  dailySavings: { type: Number, required: true },
  goalDate: { type: Date, required: true },
}, {
  timestamps: false,
});

const Savings = mongoose.model('Savings Goal', savingsGoalSchema);

module.exports = Savings;