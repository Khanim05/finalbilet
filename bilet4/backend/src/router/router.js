import express from 'express'
import { addProduct, delProduct, getProduct } from '../colletion/collection.js'

let productRouter=express.Router()

productRouter.post('/', addProduct)
productRouter.delete('/:id', delProduct)
productRouter.get('/', getProduct)

export default productRouter
