import React, {useState, useContext, useEffect} from 'react';
import {Container} from '../../Styles/Globals';
import * as Styled from './Styled';
import {Data} from '../../Services/data';
import Cards from './Cards';
import {Pokemon, Modal} from '../../GlobalStates/contexts';

export default function SearchResults() {
	const {pokemon, setPokemon, offset, setOffset} = useContext(Pokemon);
	const {setShowNewCardModal} = useContext(Modal);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (pokemon?.length === 0) {
			Data(setPokemon);
		}
	}, [pokemon, setPokemon]);

	useEffect(() => {
		Data(setPokemon, offset);
		setLoading(false);
	}, [offset, setPokemon]);

	function loadMore() {
		setLoading(true);
		setOffset(pokemon.length);
	}

	function backSearch() {
		Data(setPokemon);
		setOffset(pokemon.length);
	}

	return (
		<Styled.SearchResults>
			<Container>
				<Styled.Flex>
					<Styled.Title>Resultado de busca</Styled.Title>
					<Styled.Button type='button' onClick={() => setShowNewCardModal(true)}>
						Novo Card
					</Styled.Button>
				</Styled.Flex>
				<Cards data={pokemon} />
				<Styled.FlexCenter>
					{pokemon.name ? (
						<Styled.Button type='button' onClick={() => backSearch()}>
							Voltar
						</Styled.Button>
					) : (
						<Styled.Button disabled={loading} type='button' onClick={() => loadMore()}>
							{loading ? 'Carregando...' : 'Carregar Mais'}
						</Styled.Button>
					)}
				</Styled.FlexCenter>
			</Container>
		</Styled.SearchResults>
	);
}
