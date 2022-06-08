let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let userSchema = new Schema({
    name:{type:String,required:true},
    email:String,
    mobile:Number,
    age:Number
})
module.exports=mongoose.model("User",userSchema)
