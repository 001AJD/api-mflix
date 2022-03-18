import { getRandomMoviesService } from '../services/mflixService.js'
import { addLog } from '../helpers/utils.js';
const getRandomMoviesController = (req,res) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixController => getRandomMoviesController';
	getRandomMoviesService(req,(err,response)=>{
		if(err){
			addLog(req, functionName, start, process.hrtime.bigint());
			res.status(err.errCode).end();
		}
		else
		{
			addLog(req, functionName, start, process.hrtime.bigint());
			res.status(200).send(response);
		}
	})
}

export { getRandomMoviesController }