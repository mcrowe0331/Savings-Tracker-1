const router = require('express').Router();
let savingsGoal = require('../models/savingsGoal.model');

router.route('/').get((req, res) => {
  savingsGoal.find()
    .then(savingsGoal => res.json(savingsGoal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const goalName = req.body.goalName;
  const goalAmount = req.body.goalAmount;
  const dailySavings = Number(req.body.dailySavings);
  const goalDate = Date.parse(req.body.goalDate);

  const newSavingsGoal = new savingsGoal({
    goalName,
    goalAmount,
    dailySavings,
    goalDate,
  });

  newSavingsGoal.save()
  .then(() => res.json('New Savings Goal added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;