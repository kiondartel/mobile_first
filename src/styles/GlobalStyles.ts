import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Nunito", sans-serif;
  }

  body {
    background-color: #EBECEE;
  }
`;

export default GlobalStyle;
