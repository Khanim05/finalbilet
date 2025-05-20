import express from 'express'
import { addProd, delProd, getProd } from '../collection/collection.js'

const router=express.Router()
router.post('/', addProd)
router.delete('/:id', delProd)
router.get('/', getProd)

export default router