import mongoose from "mongoose";


mongoose.connect(process.env.mongourl).then(()=>{
    console.log("connect mongo")
}).catch(()=>{
    console.log('inconnect mongo')
})