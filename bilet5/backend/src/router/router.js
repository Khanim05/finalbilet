import express from 'express'
import { addProduct, delProduct, getProduct } from '../../collection/collection.js'

let productRouter=express.Router()

productRouter.get('/', getProduct)
productRouter.post('/', addProduct)
productRouter.delete('/:id', delProduct)

export default productRouter

