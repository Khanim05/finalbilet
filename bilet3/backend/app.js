import express from 'express'
import 'dotenv/config'
import './src/db/dbConnection.js'
import cors from 'cors'
import ProductRouter from './src/router/router.js'

const app=express()

app.use(express.json())

app.use(cors())
 
const port=process.env.PORT || 5001

app.use('/api/bilet3', ProductRouter)


app.listen(port,()=>{
   console.log(`Server is running ${`http://localhost:${port}`}`)
})

