import mongoose from "mongoose";
// we wanna cerate scema with the following fields email,username,password and we want to add timestamps to the schema
const userSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true

},
username: {
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
},
password:{
     type:String,
    required:true,
}


},{timestamps:true}//adds createdAt and updatedAt fields automatically
);
export const User= mongoose.model("User",userSchema)//two feilds in this methord name of the model and the schema to be used
