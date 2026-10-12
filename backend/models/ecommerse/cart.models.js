import mongoose from "mongoose";
const cartSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    products:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
        //nee t to add quantity field to the product in the cart
        quantity:{
            type:Number,
            default:1
        }

      }
    ]
});
export const Cart= mongoose.model("Cart",cartSchema);