import { movies } from '../models/movies.js';
import { addLog, addErrorLog } from '../helpers/utils.js';

const addMovieDbFunction = async(req, newMovie) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixDbFunctions => addMovieDbFunction';
	try
	{
		const dbResponse = await movies.create(newMovie);
		addLog(req,functionName,start,process.hrtime.bigint());
		return { statusCode : 201, message: dbResponse };
	}
	catch(e)
	{
		addErrorLog(req,e.toString(),start,process.hrtime.bigint());
		return { statusCode : 500, message : 'Internal Server Error'};
	}
};

export { addMovieDbFunction };
