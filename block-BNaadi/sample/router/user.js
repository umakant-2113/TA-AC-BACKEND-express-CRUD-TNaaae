let express=require("express");
let router=express.Router()
let User=require("../models/userSchema")

// user form render
router.get("/new",(req,res,next)=>{
    res.render("userdata")
})
// send data into data base
router.post("/new",(req,res,next)=>{
    User.create(req.body,(err,user)=>{
    if(err) return next(err);
    res.redirect("/user/data")
    })
})
// display all user data 

router.get("/data",(req,res,next)=>{
    User.find({},(err,user)=>{
        res.render("alluserdata",{user})
    })
})

// user list display
router.get("/list",(req,res,next)=>{
    User.find({},(err,user)=>{
        res.render("userlist",{user})
    })
})


// single user data
router.get("/:id",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        res.render("singleuser",{user});
    })
})

// render user form with single user value
router.get("/:id/edit",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        res.render("updata",{user});
    })
})

// update the value 
router.post("/:id/update",(req,res,next)=>{
let id=req.params.id;
    User.findByIdAndUpdate(id, req.body, (err,user)=>{ 
        console.log(req.body)   
    if(err)return next(err)
      res.redirect("/user/"+ id);
    })
})

router.get("/:id/delete",(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndDelete(id,(err,user)=>{
        res.redirect("/user/data")
    })
})


module.exports=router;