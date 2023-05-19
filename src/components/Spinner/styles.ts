import styled from "styled-components";

const SpinnerContainer = styled.div`
  margin: auto auto;
  border: 4px solid ${({theme}) => theme.colors["base-background"]};
  border-radius: 50%;
  border-top: 4px solid ${({theme}) => theme.colors.blue};
  width: 40px;
  height: 40px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


export { SpinnerContainer };