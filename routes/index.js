const express = require('express');
const router  = express.Router();
const Car = require('../models/car');

/* Root*/
router.get('/', (req, res, next) => {
  res.status(200).json('Kavak Cars API');
});

/* Get all cars*/
router.get('/catalogue', (req, res, next) => {
  Car.find().then(cars => res.status(200).json(cars)).catch(err => res.status(500).json(err));
})

/* Find car by id*/
router.get('/catalogue/:id', (req, res, next) => {
  const id = req.params.id;
  Car.findById(id).then(car => res.status(200).json(car)).catch(err => res.status(500).json(err));
})

router.get('/random', (req, res, next) => {
  Car.find()
  .then(cars => {
    const random = cars[Math.floor(Math.random() * cars.length)];
    res.status(200).json(random);
  })
  .catch(err => res.status(500).json(err));
})

router.post('/new', (req, res, next) => {
  console.log(req);
  const car = req.body;
  Car.create(car).then(car => res.status(200).json(car)).catch(err => res.status(500).json(err));
})

router.post('/edit', (req, res, next) => {
  const car = req.body;
  Car.findByIdAndUpdate(car._id, car).then(car => res.status(200).json(car)).catch(err => res.status(500).json(err));
})



module.exports = router;
