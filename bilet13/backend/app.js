import express from 'express'
import 'dotenv/config'
import './src/db/db.js'
import cors from 'cors'
import router from './src/router/router.js'


const app=express()
app.use(express.json())
app.use(cors())
app.use('/api/products', router)
const port=process.env.PORT || 2001

app.listen(port,()=>{
    console.log(`${`http://localhost:${port}`}`)
})