import { getRandomMoviesService } from '../services/mflixService.js';
import { addLog } from '../helpers/utils.js';
import { redisSet, redisGet, redisExists } from '../helpers/redisCache.js';
const getRandomMoviesController = async (req,res) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixController => getRandomMoviesController';
	const isBool = await redisExists('response');
	if(isBool)
	{ 
		let response = await redisGet('response');
		response = JSON.parse(response);
		res.status(200).json(response);
	}
	else
	{
		getRandomMoviesService(req,(err,response)=>{
			if(err){
				addLog(req, functionName, start, process.hrtime.bigint());
				res.status(err.errCode).end();
			}
			else
			{
				redisSet('response',response);
				addLog(req, functionName, start, process.hrtime.bigint());
				res.status(200).send(response);
			}
		});
	}
};

export { getRandomMoviesController };