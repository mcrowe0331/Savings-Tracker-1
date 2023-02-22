const router = require('express').Router();
let Daily = require('../models/dailySavings.model');

router.route('/').get((req, res) => {
  Daily.find()
    .then(dailySavings => res.json(dailySavings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const goalName = req.body.goalName;
  const goalAmount = Number(req.body.goalAmount);
  const dailySavings = Number(req.body.dailySavings);
  const goalDate = Date.parse(req.body.goalDate);

  const newdailySavings = new Daily({
    goalName,
    goalAmount,
    dailySavings,
    goalDate,
  });

  newdailySavings.save()
  .then(() => res.json('New Daily Savings total added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Daily.findById(req.params.id)
      .then(dailySavings => res.json(dailySavings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Daily.findByIdAndDelete(req.params.id)
      .then(() => res.json('Daily Savings deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Daily.findById(req.params.id)
      .then(dailySavings => {
        dailySavings.goalName = req.body.goalName;
        dailySavings.goalAmount = Number(req.body.goalAmount);
        dailySavings.dailySavings = Number(req.body.dailySavings);
        dailySavings.goalDate = Date.parse(req.body.goalDate);
  
        dailySavings.save()
          .then(() => res.json('Daily Savings updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;