import express from 'express'
import { addProduct, delProduct, getProduct } from '../collect/collect.js'

let productRouter=express.Router()

productRouter.post('/', addProduct)
productRouter.delete('/:id', delProduct)
productRouter.get('/', getProduct)

export default productRouter