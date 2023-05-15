import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -6rem;
  background: ${({theme}) => theme.colors["base-profile"]};
  border-radius: 10px;

  gap: 2rem;
  
`;

const ProfilePicture = styled.img`
  width: 148px;
  border-radius: 8px;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const ProfileContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div{
    display: flex;
    justify-content: space-between;
  }
`;

const ProfileInformation = styled.div`
  display: flex;
  gap: 1.5rem;

  ul{
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li{
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg{
        width: 18px;
        height: 18px;
        color: ${({theme}) => theme.colors["base-label"]};
      }
    }
  }
`;




export { 
  ProfileContainer, 
  ProfilePicture,
  ProfileContent, 
  ProfileContentHeader,
  ProfileInformation
};