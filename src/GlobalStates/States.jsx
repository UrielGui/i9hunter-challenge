import React, {useState} from 'react';
import {Pokemon} from './contexts';

export default function States({children}) {
	const [pokemon, setPokemon] = useState('');
	return (
		<>
			<Pokemon.Provider value={{pokemon, setPokemon}}>{children}</Pokemon.Provider>
		</>
	);
}
