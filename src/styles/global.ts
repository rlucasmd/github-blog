import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: none;
  }

  body {
    background-color: ${({theme}) => theme.colors["base-background"]};
    color: ${({theme}) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  label, span, textarea, button {
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }
`;

export { GlobalStyle };

