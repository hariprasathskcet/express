import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import route  from './Routes/userRoute.js';

const app=express();
app.use(bodyParser.json())
dotenv.config();

const PORT=process.env.PORT || 5000
const MONGOURL=process.env.MONGO_URL

mongoose
.connect(MONGOURL)
.then(()=>{
    console.log("database connected");
    app.listen(PORT,()=>{
        console.log(`listening to the port ${PORT}`)
    })
})
.catch((err)=>console.log(err));
app.use('/api/user',route);
