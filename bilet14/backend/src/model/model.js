import mongoose, { Schema } from 'mongoose'

const shcemaModel=mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
},
{
    collection:'bilet14DB'
})

let products=mongoose.model('products', shcemaModel)
export default products