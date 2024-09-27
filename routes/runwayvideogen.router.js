import express from 'express';
import { checkVideoStatus, generateVideo } from '../controllers/runwayvideogen.controller.js';

const videoGenRoute = express.Router();

// Route to start video generation
videoGenRoute.post('/generate', generateVideo);

// Route to check video status
videoGenRoute.get('/status/:uuid', checkVideoStatus);

export default videoGenRoute;
