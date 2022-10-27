import React from 'react';
import * as Styled from './Styled';

export default function Header() {
	return (
		<header>
			<Styled.TopBar>
				<img src='img/logo.svg' alt='' />
			</Styled.TopBar>
			<Styled.Container>
				<h1>Cont</h1>
			</Styled.Container>
		</header>
	);
}
