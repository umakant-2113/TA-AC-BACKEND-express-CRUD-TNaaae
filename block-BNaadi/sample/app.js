 let express=require("express");
 let mongoose=require("mongoose");
 let path=require("path");

//  mongoose connection

mongoose.connect("mongodb://127.0.0.1/user-Dairy2",(err)=>{
    console.log(err?err: "mongoose are connected")
})

//  intanciate 
let app=express()

// middle ware 

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname +"/public"))

// ejs setup
app.set("view engine","ejs");
app.set("views",path.join(__dirname ,"views"))

// router require
app.use("/",require("./router/index"));
app.use("/user",require("./router/user"));

// 404 error handler
app.use((req,res,next)=>{
    res.send("page not found")
})

// custome eroor handler

app.use((err,req,res,next)=>{
    res.send(next(err))
})

// listener
app.listen(3000,()=>{
    console.log("server os listing on port 3k ")
})