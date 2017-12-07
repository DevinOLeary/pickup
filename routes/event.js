const express = require('express');
const router = express.Router();
const {mongoose} = require('../db/mongoose');
const {Event} = require('../models/event');

router.post('/', (req, res) => {
  const event = new Event({
    title:req.body.title,
    date:req.body.date,
    time: req.body.time,
    location: req.body.location,
    category:req.body.category,
    description:req.body.description
  });
  event.save().then((doc) => {
    res.send({doc});
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.get('/:category', (req,res) => {
  const category = req.params.category;
  Event.find({category}).then((docs) => {
    if(!docs){
      res.status(404).send();
    }
    res.send({docs})
  }).catch((err) => {
    res.status(400).send(err);
  });
});

module.exports = router;
