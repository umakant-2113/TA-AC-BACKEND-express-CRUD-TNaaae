// require 
let express=require("express");
let mongoose=require("mongoose");
let path=require("path");

// mongoose connections
mongoose.connect("mongodb://127.0.0.1/Userbiodata",(err)=>{
    console.log(err?err : "mongoose connected")
});

// intainciate
let app=express();

// middle ware 
// let a= (__dirname,"/public/stylesheet/style.css")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + "/public"));




// set up ejs 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

// require router
app.use("/",require("./router/index"));
app.use("/user",require("./router/user"))



// 404 error handler

app.use((req,res,next)=>{
    res.send("PAGE NOT FOUND")
});

// server error handler

app.use((err,req,res,next)=>{
    next(err)
})

// listenere
app.listen(3000,()=>{
console.log("server is listeninh on port 3k");
})
