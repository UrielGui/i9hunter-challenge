import styled from 'styled-components';

export const SearchResults = styled.div`
	padding: 2rem 0rem;
`;

export const Title = styled.h1`
	color: #5f1478;
	flex-grow: 2;
	@media (max-width: 640px) {
		margin-top: 20px;
	}
`;

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 640px) {
		flex-direction: column-reverse;
		padding-bottom: 5px;
		align-content: center;
	}
`;

export const Button = styled.button`
	background: #e76316;
	color: #fff;
	width: 173px;
	height: 48px;
	border-radius: 8px;
	font-size: 20px;

	@media (max-width: 640px) {
		align-self: center;
	}
`;

export const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
`;
