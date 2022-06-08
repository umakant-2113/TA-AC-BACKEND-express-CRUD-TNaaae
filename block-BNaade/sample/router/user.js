let express=require("express");
let router=express.Router()
let User=require("../models/Userschema")


// rendering the form 
router.get("/new",(req,res,next)=>{
    res.render("user")
})
// making data base 
router.post("/new",(req,res,next)=>{
User.create(req.body,(err,user)=>{
    if(err) return next(err)
    res.send(user)
})
});

// alluser details router
router.get("/data",(req,res,next)=>{
    User.find({},(err,user)=>{
        if(err) return next(err);
        res.render("userdetails",{user:user})
    })
})
// single user details
router.get("/:id",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        console.log(user)
        res.render("singleuser",{user});
    })
})

// update user details 
router.post("/:id",(req,res,next)=>{
    let userid=req.params.id;
    User.findByIdAndUpdate(userid, req.body,(err,user)=>{
        if(err) return next(err);
    res.redirect("/user/data")
    })
})


module.exports=router;