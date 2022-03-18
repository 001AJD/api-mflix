import { mongoose } from 'mongoose';
const Schema = mongoose.Schema;
const moviesSchema = new Schema({
	title: String,
	fullplot: String,
	year: Number,
	cast: [String],
	genres: [String]
});

const movies = mongoose.model('movies',moviesSchema,'movies');
export { movies }