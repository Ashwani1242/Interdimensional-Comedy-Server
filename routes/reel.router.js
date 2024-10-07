import { Router } from 'express';
const reelGenRoute = Router();
import multer from 'multer';
import { generateSummaryController } from '../controllers/reel.controller.js';

const upload = multer({ dest: 'uploads/' });

reelGenRoute.post('/generate-summary', upload.single('image'), generateSummaryController);


export default reelGenRoute;
