const router = require('express').Router();



let Credit = require('../models/credit.model');
  router.route('/').get((req, res) => {
    Credit.find()
      .then(credit => res.json(credit))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/').get((req, res) => {
  Credit.find()
    .then(credit => res.json(credit))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);


  const newCredit = new Credit({
    username,
    description,
    amount,
    date,
  });


  newCredit.save()
  .then(() => res.json('New Credit added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Credit.findById(req.params.id)
      .then(credit => res.json(credit))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Credit.findByIdAndDelete(req.params.id)
      .then(() => res.json('Credit deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Credit.findById(req.params.id)
      .then(credit => {
        credit.username = req.body.username;
        credit.description = req.body.description;
        credit.amount = Number(req.body.amount);
        credit.date = Date.parse(req.body.date);
  
  
        credit.save()
          .then(() => res.json('Credit updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;