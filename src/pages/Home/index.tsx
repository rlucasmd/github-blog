import { LinkWithIcon } from "../../components/LinkWithIcon";
import { HomeContainer } from "./styles";

function Home(){
  return (
    <HomeContainer className="container">
      <h1>Home page</h1>
      <LinkWithIcon text="github" />
    </HomeContainer>
  );
}

export { Home };