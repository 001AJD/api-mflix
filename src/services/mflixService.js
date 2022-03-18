import { getRandomMoviesDbFunction } from '../dbFunctions/mflixDbFunctions.js'
import { getRandomMoviesServiceMapper } from './responseMapper/getRandomMoviesServiceMapper.js';
const getRandomMoviesService = (req, callback) => {
	getRandomMoviesDbFunction(req,(err,response) => {
		if(err)
		{
			callback(err);
		}
		else
		{
			callback(null, getRandomMoviesServiceMapper(response));
		}
	});
}

export { getRandomMoviesService }