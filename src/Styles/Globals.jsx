import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 13px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background: #b10f84;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #a01379;
  }
  body {
    font-family: Open Sans, sans-serif;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #e91e63;
  }
  ul {
    list-style: none;
  }
  button {
    text-decoration: none;
    border: 0;
    cursor: pointer;
  }
  input {
    border: 0;
  }
`;

export const Container = styled.div`
	padding: 0rem 10rem;
	@media (max-width: 450px) {
		padding: 0rem 10rem;
	}
`;
