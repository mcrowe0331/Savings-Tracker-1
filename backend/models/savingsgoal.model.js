const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const savingsSchema = new Schema({
  goalName: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  goalDate: { type: Date, required: true },
  dailySavings: { type: Number, required: true },
}, {
  timestamps: false,
});

const savingsGoal = mongoose.model('Savings Goal', savingsGoalSchema);

module.exports = savingsGoal;