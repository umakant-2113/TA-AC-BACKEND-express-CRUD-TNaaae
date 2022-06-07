// require
let express=require("express");
let mongoose=require("mongoose");
let path=require("path");

//  mongoose connection

mongoose.connect("mongodb://127.0.0.1/user",(err)=>{
    console.log(err ? err :"mongoose connected")
})

// rquire router
let indexRouter=require("./router/index")
let userRouter=require("./router/user")

// intanciate 
let app=express()

// middleware 

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",indexRouter)
app.use("/user",userRouter)

// setup of ejs 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))



// 404 error handle 

app.use((req,res,next)=>{
    res.send("page not found")
})


// custome  error handler
app.use((err,req,res,next)=>{
    next(err)
})


// listener

app.listen(3000,()=>{
    console.log("server is listening on port 3k")
})
