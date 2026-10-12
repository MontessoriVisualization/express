import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username: {
    type:String,
    required:true,
    unique:true,
    lowercase:true

},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
},
password:{
     type:String,
    required:true,

}


},{timestamps:true}//adds createdAt and updatedAt fields automatically
);

export const User = mongoose.model("User",userSchema)//two feilds in this methord name of the model and the schema to be used