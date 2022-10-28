import React, {useState} from 'react';
import {Pokemon} from './contexts';

export default function States({children}) {
	const [pokemon, setPokemon] = useState('');
	const [offset, setOffset] = useState(0);
	return (
		<>
			<Pokemon.Provider value={{pokemon, setPokemon, offset, setOffset}}>{children}</Pokemon.Provider>
		</>
	);
}
