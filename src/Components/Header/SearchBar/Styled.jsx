import styled from 'styled-components';

export const SearchBar = styled.input`
	width: 100%;
	height: 5rem;
	border-radius: 8px;
	padding: 0 2rem;
	font-size: 1.8rem;

	::-webkit-input-placeholder {
		opacity: 0.7;
	}
`;

export const IconBar = styled.span`
	height: 3rem;
	width: 3rem;
	background: url(img/icons/search.png) no-repeat;
	background-size: cover;
	padding: 4px;
	position: absolute;
	box-sizing: border-box;
	right: 12rem;
	top: 12.6rem;
	cursor: pointer;
}
`;
