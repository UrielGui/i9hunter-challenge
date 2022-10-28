import React, {useState, useContext} from 'react';
import * as Styled from './Styled';
import {DataOnSearch} from '../../../Services/data';
import {Pokemon} from '../../../GlobalStates/contexts';

export default function SearchBar() {
	const {setPokemon} = useContext(Pokemon);
	const [value, setValue] = useState('');

	function onSubmit() {
		DataOnSearch(value, setPokemon);
	}
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
