let express = require('express');
let router = express.Router();

let User = require('../models/userschema');

router.get('/new', (req, res) => {
  res.render('userform');
});

router.post('/new', (req, res,next) => {
    if(req.body===null){
       return res.redirect('/user/new')
    }else{
        User.create(req.body, (err, user) => {
            if (err) return  res.redirect('/user/new');
            res.redirect('/');
          });
    }

});

module.exports = router;
