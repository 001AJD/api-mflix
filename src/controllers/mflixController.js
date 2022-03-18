import { getRandomMoviesService } from '../services/mflixService.js'
const getRandomMoviesController = (req,res) => {
	getRandomMoviesService(req,(err,response)=>{
		if(err){
			res.status(err.errCode).end();
		}
		else
		{
			res.status(200).send(response);
		}
	})
}

export { getRandomMoviesController }