import express from 'express'
import 'dotenv/config'
import './src/db/dbConnect.js'
import productRouter from './src/router/routerProduct.js'
import cors from 'cors'  


const app=express()

app.use(express.json())

app.use(cors())

app.use('/api/products', productRouter)

const port=process.env.PORT || 3001




app.listen(port, ()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`)
})