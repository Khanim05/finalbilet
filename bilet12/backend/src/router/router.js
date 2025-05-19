import express from 'express'
import { addprod, delprod, getprod } from '../collection/collection.js'

let router=express.Router()

router.post('/', addprod)
router.delete('/:id', delprod)
router.get('/', getprod)

export default router