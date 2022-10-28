import styled from 'styled-components';

export const SearchResults = styled.div`
	padding: 2rem 0rem;
`;

export const Title = styled.h1`
	color: #5f1478;
	flex-grow: 2;
`;

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 450px) {
		flex-direction: column;
		padding-bottom: 5px;
	}
`;

export const NewCardButton = styled.button`
	background: #e76316;
	color: #fff;
	width: 173px;
	height: 48px;
	border-radius: 8px;
	font-size: 17px;
`;
