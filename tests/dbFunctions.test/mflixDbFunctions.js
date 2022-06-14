import { getRandomMoviesDbFunction } from '../../src/dbFunctions/mflixDbFunctions.js';
import { movies } from '../../src/models/movies.js';
import { mock, spy } from 'sinon';

describe('Test Suite for DBFunctions',()=>{
	it('getRandomMoviesDbFunction should return valid db response',(done)=>{
		const dbResponse = [
			{
				"title": "Dus",
				"fullplot": "Siddhant Dheer lives a wealthy lifestyle with his brother, Shashank, and sister, Anu. Both Siddhant and Shashank work for India's Anti-Terrorist Cell (ATC), along with Aditya and Aditi. After interrogating a suspect named Altaf, they get information that terrorists are planning a major strike in Canada that may endanger 25000 lives during the month of May. Altaf tells them the mastermind behind this attack is a terrorist named Jambhal, who has a contact named Himmat Mehndi. Shashank, and Aditya fly to Canada, meet with ATC Agent Neha, and then abduct Himmat, who denies that profusely. The duo team up with Canadian Police Officer Danish \"Dan\", and together attempt to piece together whatever information they have gathered from Himmat, only to find out that no one is who they claim they are, and the duo find themselves entrapped in a web of deceit and lies, with no clues as to who is behind the threat - the countdown for which has already begun.",
				"cast": [
					"Sanjay Dutt",
					"Sunil Shetty",
					"Abhishek Bachchan",
					"Zayed Khan"
				],
				"genres": [
					"Action",
					"Crime",
					"Thriller"
				],
				"year": 2005
			}];
		const moviesMock = mock(movies);
		const query = [
			{$sample : {size : 5}},
			{$project : { _id: 0, title: 1, fullplot: 1, year: 1, cast: 1, genres: 1 }}
		];
		const request = {
			'path' : '/mflix'
		};
		const callback = spy();
		moviesMock.expects('aggregate').withArgs(query).yields(dbResponse);
		getRandomMoviesDbFunction(request,callback);
		moviesMock.verify();
		moviesMock.restore();
		done();
	});
});