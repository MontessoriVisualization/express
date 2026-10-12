import mongoose from "mongoose";
const subTodoShema= new mongoose.Schema({
content:{
    type:String,
    required:true
}

},{timestamps:true})
export const SubTodo= mongoose.model("SubTodo",subTodoShema)
