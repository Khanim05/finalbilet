import express from 'express'
import { addproduct, delproduct, getproduct } from '../collection/collection.js'

const router=express.Router()
router.post('/', addproduct)
router.delete('/:id', delproduct)
router.get('/', getproduct)

export default router