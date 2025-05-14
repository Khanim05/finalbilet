import mongoose from "mongoose";

let schema=mongoose.Schema({
    image:{type:String, required:true},
    text:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String,required:true},
},
{collection:"bilet8"}
)
let products=mongoose.model("products",schema)

export default products