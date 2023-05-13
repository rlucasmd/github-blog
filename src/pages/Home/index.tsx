import { LinkWithIcon } from "../../components/LinkWithIcon";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";

function Home(){
  return (
    <HomeContainer className="container">
      <Profile />
      <h1>Home page</h1>
      <LinkWithIcon text="github" />
    </HomeContainer>
  );
}

export { Home };