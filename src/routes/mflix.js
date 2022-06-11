import express from 'express';

const router = express.Router();

import { getRandomMoviesController } from '../controllers/mflixController.js';
import { addMovieController } from '../controllers/addMovieController.js';

import {  movieValidationRules, validatePayload } from '../validators/validateNewMoviePayload.js';

router.get('/movies', getRandomMoviesController);
router.post('/movie', movieValidationRules(), validatePayload, addMovieController);

export { router };
