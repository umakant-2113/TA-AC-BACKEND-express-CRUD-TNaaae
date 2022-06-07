// all requirement 
let express=require("express")
let mongoose=require("mongoose");
let path=require("path");

// mongoose connection
mongoose.connect("mongodb://127.0.0.1/sample",(err)=>{
    console.log("connected",  err? false: true)
})

// intanciate

let app=express();

// router require

let userRouter=require("./router/user")
let indexRouter=require("./router/index")

// views setup engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname ,"views"))

// router require
app.use(express.urlencoded({extended:false}));
app.use("/",indexRouter)
app.use("/user",userRouter)

// 404 error handle 

app.use((req,res,next)=>{
    res.statusCode=404;
    res.send("page not found");
})

// server error handler

app.use((err,req,res,next)=>{
    res.statusCode=505;
    next(err)
})

// listener 
app.listen(3000,()=>{
    console.log("server is listening on port 3k")
})
