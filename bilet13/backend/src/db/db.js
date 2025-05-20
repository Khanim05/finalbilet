import mongoose from "mongoose";

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log(`connect mongo`)
}).catch(()=>{
    console.log(`inconnect mongo`)
})