import mongoose from 'mongoose'

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("mongo connect")
}).catch(()=>{
    console.log('inconnect mongo')
})