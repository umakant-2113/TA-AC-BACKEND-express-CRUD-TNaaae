let express = require('express')
let router = express.Router()

let Student = require('../models/Student')


// routes
router.get("/",(req,res)=>{
    res.send("welcome to express")
})

//rendering a form
router.get("/new",(req,res)=>{
    res.render("studentForm")
})



//capture the data
router.post("/new",(req,res,next)=>{
Student.create(req.body,(err,student)=>{
    if(err) return next(err)
    console.log(student)
})
})

router.get("/data",(req,res,next)=>{
   Student.find({},(err,students)=>{
     res.render('students',{list:students})
   }) 
   
})

router.get("/:id",(req,res,next)=>{
    let id=req.params.id;
Student.findById(id,(err,students)=>{
    console.log(err);
    res.json(students)
})

})




module.exports=router