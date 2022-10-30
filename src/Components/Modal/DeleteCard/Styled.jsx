import styled from 'styled-components';

export const FullScreen = styled.div`
	display: ${(props) => (props.show ? 'flex' : 'none')};
	justify-content: center;
	place-items: center;
	height: 100%;
	width: 100%;
	background: #ffffff94;
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	z-index: 1;
	overflow-y: hidden;
`;

export const Container = styled.div`
	text-align: -webkit-center;
	width: 438px;
	height: 434px;
	background: #fff;

	@media (max-width: 640px) {
		width: 100%;
		height: 100%;
	}
`;

export const Cancel = styled.button`
	display: flex;
	justify-content: center;
	place-items: center;
	color: #fff;
	width: 34px;
	height: 34px;
	background: #e76316;
	border-radius: 100%;
	position: relative;
	top: -217px;
	left: 453px;
	font-size: 16px;

	@media (max-width: 640px) {
		display: none;
	}
`;

export const Picture = styled.div`
	width: 159px;
	height: 159px;
	border-radius: 100%;
	background: #f6f4f6 0% 0% no-repeat padding-box;
	border: 6px solid #e4e4e4;
	margin-top: 40px;
	margin-bottom: 25px;

	img {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const Title = styled.h1`
	color: #db2525;
	margin-bottom: 10px;
`;

export const Divider = styled.hr`
	border: 1px solid #f0eff0;
	width: 80%;
	margin-top: 25px;
	margin-bottom: 20px;
`;

export const Button = styled.button`
	width: 165px;
	height: 48px;
	background: ${(props) => (props.delete ? '#db2525' : 'transparent')};
	border: ${(props) => (props.cancel ? '1px solid #DB2525' : '0px')};
	color: ${(props) => (props.cancel ? '#db2525' : '#fff')};
	font-size: 20px;
	box-shadow: 0px 3px 6px #92207242;
	border-radius: 8px;
	margin-right: 10px;
	margin-left: 10px;
`;
