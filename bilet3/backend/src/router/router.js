import express from 'express'
import { addProduct, deletePrdct, getPrdct } from '../control/Control.js'

let ProductRouter=express.Router()

ProductRouter.post('/', addProduct)
ProductRouter.delete('/:id', deletePrdct)
ProductRouter.get('/', getPrdct)

export default ProductRouter