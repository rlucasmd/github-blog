import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer } from "./styles";

function Home(){
  return (
    <HomeContainer className="container">
      <Profile />
      <SearchInput />
    </HomeContainer>
  );
}

export { Home };