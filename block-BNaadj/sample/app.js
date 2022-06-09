// require all
const exp = require("constants");
let express=require("express");
let mongoose=require("mongoose");
let path=require("path");

// mongoose connect

mongoose.connect("mongodb://127.0.0.1/sample2",(err)=>{
    console.log(err? err : "mongoose connected")
})

// intanciate
let app=express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname +"/public"))

// set up ejs 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

// router require
app.use("/",require("./router/index"))
app.use("/user",require("./router/user"))

// 404 error handler
app.use((req,res,next)=>{
    res.send("Page not found")
})

// custome error
app.use((err,req,res,next)=>{
    next(err)
})

// listener
app.listen(3000,()=>{
    console.log("server is listing on port 3k")
})
