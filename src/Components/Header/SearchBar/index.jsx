import React from 'react';
import * as Styled from './Styled';

export default function SearchBar() {
	return (
		<>
			<Styled.IconBar />
			<Styled.SearchBar name='search' placeholder='Digite aqui a sua busca...' />
		</>
	);
}
