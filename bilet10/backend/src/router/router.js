import express from 'express'
import { addProduct, delProduct, getProduct } from '../connect/connect.js'

let productRouter=express.Router()

productRouter.post('/', addProduct)
productRouter.get('/', 
    getProduct
)

productRouter.delete('/:id', delProduct)

export default productRouter