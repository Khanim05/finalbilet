import express from 'express'
import { addProduct, deleteProduct, getProduct } from '../controller/controlProd.js'

const productRouter=express.Router()

productRouter.post('/', addProduct)
productRouter.get('/', getProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter
