import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDb is Connected")
}).catch(err=>{
    console.log(err);
});



const app =express();
// app.get("/send",(req,res)=>{
//     res.send("Hello World");
// })
app.use('/api/user', userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
