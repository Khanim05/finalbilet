import express from 'express'
import 'dotenv/config'
import './src/db/dbConnect.js'
import cors from 'cors'
import productRouter from './src/router/router.js'

const app=express()
app.use(express.json())
app.use(cors())

const port=process.env.PORT || 5001

app.use('/api/products', productRouter)

app.listen(port, ()=>{
    console.log(`${`http://localhost:${port}`}`)
})