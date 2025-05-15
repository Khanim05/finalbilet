import mongoose from "mongoose";

const Schema=mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    text:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
},
{collection:"bilet9"}
)
const products=mongoose.model("products", Schema)
export default products