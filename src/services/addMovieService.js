import { addMovieDbFunction } from '../dbFunctions/addMovieDbFunction.js';
import { addLog } from '../helpers/utils.js';

const addMovieService = async(req, newMovie) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixService => getRandomMoviesService';
	const response = await addMovieDbFunction(req,newMovie);
	addLog(req,functionName,start,process.hrtime.bigint());
	return response;
};

export { addMovieService };