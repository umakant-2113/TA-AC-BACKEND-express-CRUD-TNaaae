let express = require('express');
let router = express.Router();

let User = require('../modles/UserSchema');



router.get('/new', (req, res) => {
  res.render('user');
});

router.post('/new', (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
});

router.get("/data",(req,res,next)=>{
  User.find({},(err,user)=>{
    if(err)return next(err);
    res.render("userList", { list: user });
  })
})

router.get("/userdata",(req,res,next)=>{
  User.find({},(err,user)=>{
    if(err)return next(err);
    res.send(user)
})
});

router.get("/data/:id",(req,res,next)=>{
  let id=req.params.id;
  User.findById(id,(err,user)=>{
    if(err)return next(err)
    res.send(user)
  })
})

// userform ejs file render

router.get("/userform",(req,res,next)=>{
  res.render("userForm")
})

// update data base from router
router.get("/update",(req,res,next)=>{
  let filter={name:"rahul",email:"rahulmandyal1@gmail.com",city:"dharamshala"};
let update={name:"kamta",email:"kamta@rathgmail.com",city:"rath"}
  let id=req.params.id
  User.findOneAndUpdate(filter,update,{new:true},(err,user)=>{
    if(err) return next(err);
    res.send(user)
  })
})

// delete database from

router.get("/delete/:id",(req,res,next)=>{
  let id=req.params.id;
User.findOneAndDelete({},(err,user)=>{
  if(err) return next(err);
  res.send(`${user}is deleted`)
})

})


module.exports = router;
