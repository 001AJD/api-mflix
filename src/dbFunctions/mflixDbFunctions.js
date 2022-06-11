import { movies } from '../models/movies.js';
import { addLog } from '../helpers/utils.js';
const errorResponse = [
	{
		'errCode' : 500
	},
	{
		'errCode' : 404
	}
];

const getRandomMoviesDbFunction = (req,callback) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixDbFunctions => getRandomMoviesDbFunction';
	const query = [
		{$sample : {size : 5}},
		{$project : { _id: 0, title: 1, fullplot: 1, year: 1, cast: 1, genres: 1 }}
	];
	movies.aggregate(query,(err,dbResult) => {
		if(err){
			addLog(req, functionName, start, process.hrtime.bigint());
			callback(errorResponse[0]);
		}
		else
		{
			if(dbResult.length > 0)
			{
				addLog(req, functionName, start, process.hrtime.bigint());
				callback(null, dbResult);
			}
			else
			{
				addLog(req, functionName, process.hrtime.bigint());
				callback(errorResponse[1]);
			}
		}
	});
};

export { getRandomMoviesDbFunction };
