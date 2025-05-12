import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
},
   {
    collection:"bilet4"
   }
)

const bilet4=mongoose.model("products", productSchema)
export default bilet4