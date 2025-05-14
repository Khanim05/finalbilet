import express from 'express'
import 'dotenv/config'
import './src/db/data.js'
import cors from 'cors'
import routerProduct from './src/router/router.js'

const app=express()
app.use(express.json())
app.use(cors())

const port=process.env.PORT || 5128

app.use('/api/products', routerProduct)

app.listen(port,()=>{
    console.log(`${`http://localhost:${port}`}`)
})