import mongoose from 'mongoose'

let productSchema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },

},
  {
    collection:"bilet5"
  }

)

const products=mongoose.model("products", productSchema)

export default products