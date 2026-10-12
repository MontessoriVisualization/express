import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        enum:["electronics","fashion","home","beauty","sports","toys"],
        required:true
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
},{timestamps:true}//adds createdAt and updatedAt fields automatically
);
export const Product= mongoose.model("Product",productSchema)//two feilds in this methord name of the model and the schema to be used