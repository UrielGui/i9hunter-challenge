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
    background: #c2c2c2;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9d9d9d;
  }
  body {
    font-family: Open Sans, sans-serif;
    background: #F6F4F6;
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
	@media (max-width: 1024px) {
		padding: 0rem 1rem;
	}
`;
