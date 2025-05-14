import mongoose from "mongoose";

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log('connect mongoDB')
}).catch(()=>{
    console.log('inconnect mongoDB')
})