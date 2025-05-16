import mongoose from 'mongoose'

const model=mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    text:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},

},
{collection:"bilet10"}
)

let products=mongoose.model("products", model)

export default products
