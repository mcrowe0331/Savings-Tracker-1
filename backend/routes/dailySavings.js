const router = require('express').Router();
let dailySavings = require('../models/dailySavings.model');

router.route('/').get((req, res) => {
  dailySavings.find()
    .then(dailySavings => res.json(dailySavings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const goalName = req.body.goalName;
  const goalAmount = req.body.goalAmount;
  const dailySavings = Number(req.body.dailySavings);
  const goalDate = Date.parse(req.body.goalDate);

  const newdailySavings = new dailySavings({
    goalName,
    goalAmount,
    dailySavings,
    goalDate,
  });

  newdailySavings.save()
  .then(() => res.json('New Daily Savings total added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;