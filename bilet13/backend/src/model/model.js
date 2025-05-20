import mongoose from "mongoose";

const modeSchema=mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
},
{collection:"bilet13"}
)

const tasty=mongoose.model("tastys", modeSchema)
export default tasty