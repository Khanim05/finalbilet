import mongoose from "mongoose"

let Schema=mongoose.Schema({
    image:{type:String, required: true},
     title:{type:String, required: true},
      price:{type:Number, required: true},
       description:{type:String, required: true},
},
   {collection:"bilet6"}
)

let products=mongoose.model("products", Schema)

export default products