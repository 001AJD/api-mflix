const getRandomMoviesServiceMapper = (data) =>{
	let response = [];
	data.forEach(item => {
		let object = {
			'title': item.title,
			'fullplot': item.fullplot,
			'cast': item.cast,
			'genres': item.genres,
			'year': item.year
		};
		response.push(object);
	});
	return response;
}

export { getRandomMoviesServiceMapper }