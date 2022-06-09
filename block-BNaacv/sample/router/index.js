let express=require("express");
let router=express.Router();

router.get("/",(req,res)=>{
   console.log (req.method,req.url)
    res.send("index page found")
})


router.use((req,res,next)=>{
    res.send("Page not found")
});

module.exports=router;
