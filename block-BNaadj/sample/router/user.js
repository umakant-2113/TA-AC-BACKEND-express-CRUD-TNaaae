let express=require("express");
let router=express.Router()
let User=require("../models/userSchema")

// render user form 
router.get("/new",(req,res,next)=>{
res.render("userform")
})

// send data into a data base 
router.post("/new",(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err)return next(err);
        res.redirect("/user/list")
    })
})

// display all user list
router.get("/list",(req,res,next)=>{
    User.find({},(err,user)=>{
        res.render("userlist",{user})
    })
})

// single user details page

router.get("/:id",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        res.render("singleuser",{user})
    })
})

// render form with value
router.get("/:id/edit",(req,res,next)=>{
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        res.render("updateuser",{user})
    })
})
router.post('/:id/edit',(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user)=>{
        res.redirect("/user/"+id)
    })
})

// delete

router.get("/:id/delete",(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndDelete(id,(err,user)=>{
        res.redirect("/user/list")
    })
})








module.exports=router;