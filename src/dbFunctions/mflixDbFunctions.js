import { movies } from '../models/movies.js';
import { addLog, addErrorLog } from '../helpers/utils.js';
const errorResponse = [
	{
		'errCode' : 500
	},
	{
		'errCode' : 404
	}
];

const getRandomMoviesDbFunction = async (req,callback) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixDbFunctions => getRandomMoviesDbFunction';
	const query = [
		{$sample : {size : 5}},
		{$project : { _id: 0, title: 1, fullplot: 1, year: 1, cast: 1, genres: 1 }}
	];
	try
	{
		const dbResponse = await movies.aggregate(query);
		addLog(req,functionName,start,process.hrtime.bigint());
		if(dbResponse.length > 0)
			{
				addLog(req, functionName, start, process.hrtime.bigint());
				callback(null, dbResponse);
			}
			else
			{
				addLog(req, functionName, process.hrtime.bigint());
				callback(errorResponse[1]);
			}
	}
	catch (e)
	{
		addErrorLog(req,e.toString(),start,process.hrtime.bigint());
		return { statusCode : 500, message : 'Internal Server Error'};
	}
};

export { getRandomMoviesDbFunction };
