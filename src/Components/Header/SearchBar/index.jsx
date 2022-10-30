import React, {useState, useContext, useEffect, useCallback} from 'react';
import * as Styled from './Styled';
import {DataOnSearch} from '../../../Services/data';
import {Pokemon} from '../../../GlobalStates/contexts';

export default function SearchBar() {
	const {setPokemon} = useContext(Pokemon);
	const [value, setValue] = useState(null);

	const onSubmit = useCallback(() => {
		if (document.querySelector('#search').value.length === 0 || value.trim().length === 0) {
			alert('Você precisa digitar um nome para pesquisar.');
		} else {
			DataOnSearch(value.toLowerCase().trim(), setPokemon);
		}
	}, [setPokemon, value]);

	useEffect(() => {
		if (document.querySelector('#search').value.length === 0) {
			setValue(null);
		}
	}, [value]);

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
				id='search'
				onChange={(e) => setValue(e.target.value)}
				placeholder='Digite aqui a sua busca...'
			/>
		</>
	);
}
