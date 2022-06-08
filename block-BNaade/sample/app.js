let express=require('express');
let mongoose=require("mongoose");
let path=require("path")

// mongoose connection
mongoose.connect("mongodb://127.0.0.1/book",(err)=>{
    console.log(err? err: "mongoose connected")
});

// intanciate

let app=express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// 

app.use("/" , require("./router/index"));
app.use("/user" ,require("./router/user"))
// ejs set app
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"))

// 404 error handler
app.use((req,res,next)=>{
    res.send("page not found")
})


// custome err 

app.use((err,req,res,next)=>{
    next(err)
})

// listener
app.listen(4000,()=>{
    console.log("server is listen port on 3k")
})