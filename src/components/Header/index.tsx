import logoImage from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

function Header(){
  return (
    <HeaderContainer>
      <img src={logoImage} />
    </HeaderContainer>
  );

}

export { Header };