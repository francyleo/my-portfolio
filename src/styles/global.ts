import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    font-family: Poppins, sans-serif;
    font-weight: ${props => props.theme.text.weight.regular};
  }
`;
