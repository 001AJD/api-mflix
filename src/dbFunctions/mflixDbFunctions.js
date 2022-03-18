import { movies } from '../models/movies.js'
const errorResponse = [
	{
		'errCode' : 500
	},
	{
		'errCode' : 404
	}
];

const getRandomMoviesDbFunction = (req,callback) => {
	const query = [
		{$sample : {size : 5}},
		{$project : { _id: 0, title: 1, fullplot: 1, year: 1, cast: 1, genres: 1 }}
	];
	movies.aggregate(query,(err,dbResult) => {
		if(err){
			callback(errorResponse[0]);
		}
		else
		{
			if(dbResult.length > 0)
			{
				callback(null, dbResult);
			}
			else
			{
				callback(errorResponse[1]);
			}
		}
	});
}

export { getRandomMoviesDbFunction }
