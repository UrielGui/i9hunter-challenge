import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 40px;
	justify-content: space-between;
	@media (max-width: 640px) {
		justify-content: center;
	}
`;

export const Card = styled.div`
	width: 234px;
	height: 280px;
	margin-bottom: 40px;
	text-align: -webkit-center;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #e5e5e5;
	border: 1px solid #e4e4e4;
	border-radius: 8px;
	opacity: 1;

	@media (max-width: 640px) {
		width: 80%;
		justify-content: center;
	}
`;

export const Picture = styled.div`
	width: 95px;
	height: 95px;
	border-radius: 100%;
	background: #f6f4f6 0% 0% no-repeat padding-box;
	border: 1px solid #e4e4e4;
	margin-top: 35px;
`;

export const Divider = styled.hr`
	border: 1px solid #f0eff0;
	width: 80%;
	margin-top: 25px;
	margin-bottom: 10px;
`;

export const Title = styled.h1`
	font-size: 1.8rem;
	font-weight: 100;
`;

export const Options = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 47px;
	margin-top: 25px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: inset 0px 3px 6px #0000000f;
	border-radius: 0px 0px 8px 8px;
`;

export const Button = styled.button`
	font-size: 15px;
	margin-right: ${(props) => (props.mright ? '40px' : '0px')};
	color: #263238;
	opacity: 0.7;
	background: transparent;

	span:hover {
		color: red;
	}
`;

export const Icon = styled.img`
	position: relative;
	top: 2px;
	right: 6px;
`;
