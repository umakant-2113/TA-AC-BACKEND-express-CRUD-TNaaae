let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let userSchema=new Schema({
name:{type:String,required:true},
email:String,
age:Number,
bio:String
})
module.exports=mongoose.model("UserDairy",userSchema)