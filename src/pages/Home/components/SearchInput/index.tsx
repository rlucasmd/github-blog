import { RegularText, TitleText } from "../../../../components/Typography";
import { SearchInputContainer } from "./styles";

function SearchInput(){
  return (
    <SearchInputContainer>
      <div>
        <TitleText as="h2" color="subtitle" size="s">
        Publicações
        </TitleText>
        <RegularText as="span" color="span" size="s">
        6 publicações
        </RegularText>
      </div>
      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchInputContainer>
  );
}

export { SearchInput };