let mongoose=require("mongoose");
let Schema=mongoose.Schema;
let userSchema=new Schema({
    name:{type:String,required:true},
    lastname:String,
    email:String,
    age:Number,
    mobile:Number
},{timestamps:true});

module.exports=mongoose.model("User",userSchema);