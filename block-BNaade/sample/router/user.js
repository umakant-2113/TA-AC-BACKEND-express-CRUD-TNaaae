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
        res.render("sigleuserdetails",{user});
    })
})

// single  user details 
router.get("/:id/edit",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id, (err,user)=>{
        if(err) return next(err);
    res.render("singleuser",{user});
    })
})

// send details into single user

router.post("/:id",(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user)=>{
        res.redirect("/user/data" )
    })
})


module.exports=router;