import axios from 'axios';

export async function Data(setData) {
	try {
		let endpoints = [];
		for (let i = 1; i < 9; i++) {
			endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
		}
		const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => res);
		return setData(response);
	} catch (error) {
		return console.log(error);
	}
}