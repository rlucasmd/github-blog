import styled from "styled-components";
import backgroundImage from "../../assets/cover.png";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 18.5rem;
  justify-content: center;
  align-items: center;

  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;

  img{
    height: 9.25rem;
    width: 6.125rem;
    margin-bottom: 5rem;
  }
`;

export { HeaderContainer };