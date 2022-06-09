let express=require("express");
let mongoose=require("mongoose");
let path=require("path");
const { getMaxListeners } = require("process");
// instanciat
let app=express()
// mongoose connected

mongoose.connect("mongodb://127.0.0.1/sample",(err)=>{
    console.log(err? err :"mongoose connected")
})
// ejs setup
app.set("view engine","ejs");
app.set("Views",path.join(__dirname,"school"))

// middleware


// routers
app.get("/",(req,res)=>{
    res.send("Welcome To Express")
})

app.get("/school",(req,res)=>{
    let school={
        name:"altcampus",
        age:15,
        email:"altcampus@gmail.com"
    }
res.render("school",{schoolData:school})
})
// errr handle err
app.use((req,res,next)=>{
    res.send("page not found")
})
// server
app.listen(3000,()=>{
    console.log("server on port 3k")
})
