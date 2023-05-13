import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  padding: 2rem 2.5rem;

  margin-top: -6rem;
  background: ${({theme}) => theme.colors["base-profile"]};
  border-radius: 10px;
  img{
    width: 148px;
    border-radius: 8px;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`;


export { ProfileContainer, ProfileContent };