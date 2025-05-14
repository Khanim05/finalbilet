import express from 'express'
import { addProduct, delProduct, getProduct } from '../collection/collection.js'

const routerProduct=express.Router()

routerProduct.post('/', addProduct)
routerProduct.delete('/:id', delProduct)
routerProduct.get('/', getProduct)

export default routerProduct