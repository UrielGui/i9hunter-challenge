import React from 'react';
import SearchBar from './SearchBar';
import * as Styled from './Styled';
import {Container} from '../../Styles/Globals';

export default function Header() {
	return (
		<header>
			<Styled.TopBar>
				<img src='img/logo.svg' alt='' />
			</Styled.TopBar>

			<Styled.HeaderContainer>
				<Container>
					<SearchBar />
				</Container>
			</Styled.HeaderContainer>
		</header>
	);
}
