import styled from 'styled-components';

export const TopBar = styled.div`
	display: flex;
	background: transparent linear-gradient(272deg, #ae276f 0%, #5f1478 100%) 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	opacity: 1;
	padding: 0.6rem 2rem;

	@media (max-width: 640px) {
		justify-content: center;
	}
`;

export const HeaderContainer = styled.div`
	background: url('img/header/search-background.png') no-repeat;
	background-size: cover;
	padding-top: 8rem;
	padding-bottom: 4rem;
`;
