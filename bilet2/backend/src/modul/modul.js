import mongoose from "mongoose";

const productShema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
},
    {connection:"products"}

)

const products=mongoose.model("products", productShema)

export default products