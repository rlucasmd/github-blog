import { createGlobalStyle } from "styled-components";
import FiraCode from "../assets/fonts/FiraCode-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "FiraCode";
    src: url(${FiraCode}) format("ttf");
    font-weight: 400;
    font-style: normal;
  }
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

  body, input, textarea, button {
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
`;

export { GlobalStyle };

