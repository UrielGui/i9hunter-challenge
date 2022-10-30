import styled, {keyframes, css} from 'styled-components';

export const FullScreen = styled.div`
	display: ${(props) => (props.show ? 'flex' : 'none')};
	height: 100%;
	width: 100%;
	background: #ffffff94;
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	z-index: 1;
	overflow-y: hidden;
	overflow-x: hidden;
	animation: ${({newCardWidth1, newCardWidth2}) =>
		css`
			${openNewCard(newCardWidth1, newCardWidth2)} 0.5s linear forwards;
		`};
`;

const openNewCard = (newCardWidth1, newCardWidth2) => keyframes`
  from {
    transform: translateX(${newCardWidth1}%);
  }
  to {
    transform: translateX(${newCardWidth2}%);
  }
`;

export const NewCard = styled.div`
	height: 100%;
	width: 40%;
	padding: 20px;
	color: #454545;
	top: 0;
	right: 0;
	float: right;
	z-index: 1;
	position: fixed;
	background: #fff;
	overflow-x: hidden;
	padding-top: 65px;

	@media (max-width: 1125px) {
		width: 30%;
	}
	@media (max-width: 945px) {
		width: 40%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const CloseNewCard = styled.button`
	font-size: 50px;
	position: absolute;
	background: transparent;
	padding: 15px;

	@media (max-width: 768px) {
		position: absolute;
		right: 0;
		z-index: 5;
	}
`;

export const Title = styled.div`
	display: flex;
	color: #5f1478;

	img {
		margin-right: 20px;
	}
`;

export const Divider = styled.hr`
	border: 1px solid #f0eff0;
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const InputTitle = styled.h3`
	text-transform: uppercase;
	font-size: 16px;
	margin-top: 50px;
`;

export const Input = styled.input`
	width: 100%;
	height: 60px;
	border: 1px solid #b9b9b9;
	border-radius: 8px;
	padding: 25px;
	font-size: 18px;
	margin-top: 15px;
`;

export const FileInput = styled.input`
	width: 100%;
	border: 1px solid #b9b9b9;
	border-radius: 8px;
	padding: 25px;
	font-size: 18px;
	margin-top: 15px;
	height: 75px;

	@media (max-width: 1280px) {
		color: transparent;
	}

	::file-selector-button {
		cursor: pointer;
		color: #e76316;
		width: 224px;
		height: 48px;
		box-shadow: 0px 3px 6px #e763162e;
		border: 1px solid #e76316;
		border-radius: 8px;
		background: #fff;
		float: right;
		position: relative;
		top: -15px;
		@media (max-width: 1280px) {
			float: none;
		}
		@media (max-width: 310px) {
			width: 117px;
			height: 28px;
			font-size: 0.8rem;
		}
	}
`;

export const Button = styled.button`
	width: 167px;
	height: 48px;
	background: #e76316 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #92207242;
	border-radius: 8px;
	font-size: 20px;
	color: #fff;
	float: right;
`;
