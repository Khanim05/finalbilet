import mongoose from "mongoose";

let modelSchema=mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    desription:{type:String,required:true},

},
{collection:'bilet12'}
)

let jevelin=mongoose.model('jevelin', modelSchema)
export default jevelin