import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import { authRoute } from './routes/auth.router.js';
import musicRoute from './routes/musicgen.router.js';
import videoGenRoute from './routes/runwayvideogen.router.js';
import reelGenRoute from './routes/reel.router.js';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRoute)
app.use('/music', musicRoute)
app.use('/video', videoGenRoute);
// app.use('/runwayauto', runwayAutoRoute);

app.use('/api/reel-gen', reelGenRoute);

// app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads'));


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