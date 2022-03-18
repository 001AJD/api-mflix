import { getRandomMoviesDbFunction } from '../dbFunctions/mflixDbFunctions.js'
import { getRandomMoviesServiceMapper } from './responseMapper/getRandomMoviesServiceMapper.js';
import { addLog } from '../helpers/utils.js';
const getRandomMoviesService = (req, callback) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixService => getRandomMoviesService'
	getRandomMoviesDbFunction(req,(err,response) => {
		if(err)
		{
			addLog(req, functionName, start, process.hrtime.bigint());
			callback(err);
		}
		else
		{
			addLog(req, functionName, start, process.hrtime.bigint());
			callback(null, getRandomMoviesServiceMapper(response));
		}
	});
}

export { getRandomMoviesService }