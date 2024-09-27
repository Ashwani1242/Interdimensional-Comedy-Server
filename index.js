import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import { authRoute } from './routes/auth.router.js';
import musicRoute from './routes/musicgen.router.js';
import videoGenRoute from './routes/runwayvideogen.router.js';
dotenv.config();

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRoute)
app.use('/music', musicRoute)
app.use('/video', videoGenRoute);


const PORT = process.env.PORT || 8000;
const DB = process.env.MONGO_URI;

mongoose
    .connect(DB)
    .then(() => {
        console.log("Connected to Database!")
        app.listen(PORT, () => {
            console.log("Server running on port:", PORT)
        })
    })
    .catch((err) => {
        console.log("Something went wrong! \n", err)
    })