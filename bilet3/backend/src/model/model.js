import mongoose from 'mongoose'

const modelSchema=mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true}

}, {
    collection:"bilet3"
})

const bilet3=mongoose.model("products",modelSchema)

export default bilet3