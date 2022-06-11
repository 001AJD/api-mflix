import { addMovieService } from '../services/addMovieService.js'
import { addLog } from '../helpers/utils.js';

const addMovieController = async (req,res) => {
	const start = process.hrtime.bigint();
	const functionName = 'mflixController => addMovieController';
    const newMovie = {
        title: req.body.title,
        fullplot: req.body.fullplot,
        year: req.body.year,
        cast: req.body.cast,
        genres: req.body.genres
    };
    const response =  await addMovieService(req, newMovie);
    addLog(req,functionName,start,process.hrtime.bigint());
    res.status(response.statusCode).json(response.message);
}

export { addMovieController }