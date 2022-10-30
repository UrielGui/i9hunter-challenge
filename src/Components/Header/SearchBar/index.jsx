import React, {useState, useContext, useEffect, useCallback} from 'react';
import * as Styled from './Styled';
import {DataOnSearch} from '../../../Services/data';
import {Pokemon} from '../../../GlobalStates/contexts';

export default function SearchBar() {
	const {setPokemon} = useContext(Pokemon);
	const [value, setValue] = useState('');

	const onSubmit = useCallback(() => {
		DataOnSearch(value, setPokemon);
	}, [setPokemon, value]);

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();
				onSubmit();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [onSubmit]);

	return (
		<>
			<Styled.IconBar onClick={() => onSubmit()} />
			<Styled.SearchBar
				name='search'
				onChange={(e) => setValue(e.target.value)}
				placeholder='Digite aqui a sua busca...'
			/>
		</>
	);
}
