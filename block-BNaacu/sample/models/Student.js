let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let studentSchema= new Schema({
    name:{type:String,required:true},
    email:{type:String,match:/@/},
    mobile:{type:Number,required:true},
    address:{type:String,required:true},
},{timestamps:true})

module.exports=mongoose.model("Student",studentSchema)