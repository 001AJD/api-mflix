import express from 'express';
const router = express.Router();
import { getRandomMoviesController } from '../controllers/mflixController.js';

router.get('/',getRandomMoviesController);

export { router }
