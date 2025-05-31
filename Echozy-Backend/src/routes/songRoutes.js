import { addSong, ListSong } from '../controllers/songController.js';  // Fixed path and added .js
import express from 'express';

const songRouter = express.Router();

songRouter.post('/add', addSong);
songRouter.get('/list', ListSong);  // Changed to GET as it's typically used for listing

export default songRouter;