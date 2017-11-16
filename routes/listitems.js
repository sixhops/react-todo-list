var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET /listitems */
router.get('/', function(req, res, next) {
  console.log("In the /listitem GET route");
  db.listitem.findAll().then(function(items) {
    console.log("Items from the db......");
    console.log(items[0].dataValues.name);
    res.send(items);
  });
});

/* POST to /listitems */
router.post('/', function(req, res, next) {
  db.listitem.create({
    name: req.body.name
  }).then(function(result) {
    res.send(result);
  });

});

// GET to /listitems/1234
router.get('/:id', function(req, res, next) {
  console.log("In the /listitem/id GET route");
  db.listitem.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(item) {
    console.log('FUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCK');
    console.log(typeof item);
    res.send(item);
  });
});

// DELETE to /listitems/1234
router.delete('/:id', function(req, res, next) {
  db.listitem.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.send(result);
  });
});

module.exports = router;
