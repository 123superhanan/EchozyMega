import { addSong, ListSong } from '../controllers/songController.js';  // Fixed path and added .js
import express from 'express';
import upload from '../middleware/multer.js';

const songRouter = express.Router();

songRouter.post('/add', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'audio', maxCount: 1 }
])
 ,addSong);
songRouter.get('/list', ListSong);  // Changed to GET as it's typically used for listing

export default songRouter;