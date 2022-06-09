let mongoose=require("mongoose");
let Schema=mongoose.Schema;
let userSchema=new Schema({
name:{type:String,required:true},
email:String,
age:Number,
address:String,
bio:String,
hobbies:[String]
})

module.exports=mongoose.model("User",userSchema);