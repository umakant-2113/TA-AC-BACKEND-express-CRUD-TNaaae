let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let userSchema= new Schema({
    name:{type:String,required:true},
    email:String,
    phone:Number,
    add:String
},{timestamps:true})

module.exports=mongoose.model("User",userSchema)