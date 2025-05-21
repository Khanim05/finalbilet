import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import './src/db/db.js'
import router from './src/router/router.js'

const app=express()
app.use(express.json())
app.use(cors())

const port=process.env.PORT || 3001
app.use('/api/products', router)
app.listen(port,()=>{
    console.log(`${`http://localhost:${port}`}`)
})