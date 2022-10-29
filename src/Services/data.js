import axios from 'axios';

export async function Data(setData, offset = 0) {
	try {
		let endpoints = [];
		let initial = offset + 13;
		for (let i = 1; i < initial; i++) {
			endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
		}
		const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => res);
		return setData(response);
	} catch (error) {
		return alert('Desculpe, mas os Pokémons estão indisponíveis no momento.');
	}
}

export async function DataOnSearch(value, setData) {
	try {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
		return setData(response.data);
	} catch (error) {
		return alert('Desculpe, mas eu não consegui encontrar esse Pokémon.');
	}
}