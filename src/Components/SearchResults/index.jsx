import React, {useContext, useEffect} from 'react';
import {Container} from '../../Styles/Globals';
import * as Styled from './Styled';
import {Data} from '../../Services/data';
import Cards from './Cards';
import {Pokemon} from '../../GlobalStates/contexts';

export default function SearchResults() {
	const {pokemon, setPokemon} = useContext(Pokemon);

	useEffect(() => {
		if (pokemon?.length === 0) {
			Data(setPokemon);
		}
	}, [pokemon, setPokemon]);

	return (
		<Styled.SearchResults>
			<Container>
				<Styled.Flex>
					<Styled.Title>Resultado de busca</Styled.Title>
					<Styled.NewCardButton>Novo Card</Styled.NewCardButton>
				</Styled.Flex>
				<Cards data={pokemon} />
			</Container>
		</Styled.SearchResults>
	);
}
