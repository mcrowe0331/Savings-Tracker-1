const router = require('express').Router();
let Savings = require('../models/savingsGoal.model');

router.route('/').get((req, res) => {
  Savings.find()
    .then(savingsGoal => res.json(savingsGoal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const goalName = req.body.goalName;
    const goalAmount = Number(req.body.goalAmount);
    const dailySavings = Number(req.body.dailySavings);
    const goalDate = Date.parse(req.body.goalDate);

  const newSavings = new Savings({
    goalName,
    goalAmount,
    dailySavings,
    goalDate,
  });

  newSavings.save()
  .then(() => res.json('New Savings Goal added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Savings.findById(req.params.id)
      .then(savingsGoal => res.json(savingsGoal))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Savings.findByIdAndDelete(req.params.id)
      .then(() => res.json('Savings Goal deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Savings.findById(req.params.id)
      .then(savingsGoal => {
        savingsGoal.goalName = req.body.goalName;
        savingsGoal.goalAmount = Number(req.body.goalAmount);
        savingsGoal.dailySavings = Number(req.body.dailySavings);
        savingsGoal.goalDate = Date.parse(req.body.goalDate);
  
        savingsGoal.save()
          .then(() => res.json('Savings Goal updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;