let express=require('express');
let router=express.Router();
let User=require("../models/userSchema")

// render the form 

router.get("/new",(req,res,next)=>{
res.render("userform")
})

//creat database

router.post("/new",(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return next(err);
        res.send(user)
    })
});

// All user data

router.get("/data",(req,res,next)=>{
   User.find({},(err,user)=>{
       res.render("alluser",{user});
   }) 
})

// get single use data

router.get("/:id",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render("singleuser",{user});
    })
})

// updata the data from the use  
router.get("/:id/edit",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        res.render("updateuser",{user})
    })
})
// 
router.post("/:id",(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user)=>{
        res.redirect("/user/"+ id);
    })
})

router.get("/:id/delete",(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndDelete(id,(err,user)=>{
        if(err) return next(err)
        res.redirect("/user/data")
    })
})



module.exports=router;