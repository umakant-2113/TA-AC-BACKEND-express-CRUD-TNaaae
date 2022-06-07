let express = require('express');
let router = express.Router();
let User = require('../models/Userschema');

// rendering a form
router.get('/new', (req, res, next) => {
  res.render('user');
});

//capture the data and saving data base

router.post('/new', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

// users list

router.get('/data', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('userList', { users });
  });
});

// user details using findById
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('singleUser', { user });
  });
});

module.exports = router;
