import styled from "styled-components";

const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;

  margin-top: 72px;
  margin-bottom: 48px;

  gap: 0.75rem;
  >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input{
    padding: 0.75rem 1rem;
    background: ${({theme}) => theme.colors["base-input"]};
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.colors["base-border"]};
    color: ${({theme}) => theme.colors["base-text"]};

    transition: 0.2s;

    &::placeholder{
      color: ${({theme}) => theme.colors["base-label"]};
    }

    &:focus{
      border-color: ${({theme}) => theme.colors.blue};
    }

  }
`;



export {
  SearchInputContainer
};