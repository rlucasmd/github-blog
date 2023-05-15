import styled from "styled-components";

const PostHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({theme}) => theme.colors["base-profile"]};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 10px;
  div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

`;

const PostHeaderDetails = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  li{
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg{
      color: ${({theme}) => theme.colors["base-label"]};
    }
  }


`;


export { PostHeaderContainer, PostHeaderDetails };