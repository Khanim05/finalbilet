import mongoose from "mongoose";

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("connect mongodb")
}).catch(()=>{
    console.log("inconnect")
})

