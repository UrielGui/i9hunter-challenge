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

	@media (max-width: 768px) {
		padding: 0 1rem;
	}

	@media (max-width: 640px) {
		font-size: 1.2rem;
		height: 4.5rem;
	}

	@media (max-width: 310px) {
		font-size: 1rem;
		height: 4rem;
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

	@media (max-width: 1024px) {
		right: 2rem;
		top: 12.3rem;
	}

	@media (max-width: 768px) {
		width: 2rem;
		height: 2rem;
		top: 13rem;
	}

	@media (max-width: 640px) {
		top: 12.6rem;
	}

	@media (max-width: 310px) {
		width: 1.3rem;
		height: 1.3rem;
		top: 12.7rem;
	}
}
`;
