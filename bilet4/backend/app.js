import express from "express"
import 'dotenv/config'
import './src/db/dbconnection.js'
import cors from 'cors'
import productRouter from "./src/router/router.js"

const app=express()

app.use(express.json())
app.use(cors())

app.use('/api/products',productRouter)

const port=process.env.PORT || 5001
app.listen(port,()=>{
    console.log(`${`http://localhost:${port}`}`)
})
