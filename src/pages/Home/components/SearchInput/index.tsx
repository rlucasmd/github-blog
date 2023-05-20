import { RegularText, TitleText } from "../../../../components/Typography";
import { SearchInputContainer } from "./styles";
import { z } from "zod";
import { zodResolver  } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>;
  postsLength: number;

}

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchInput({ getPosts, postsLength } : SearchInputProps){
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  function handleSearchPosts(data: SearchFormInputs){
    getPosts(data.query);
  }
  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <TitleText as="h2" color="subtitle" size="s">
          Publicações
        </TitleText>
        <RegularText as="span" color="span" size="s">
          {postsLength !== 1 ? `${postsLength} publicações` : `${postsLength} publicação`}
        </RegularText>
      </header>
      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SearchInputContainer>
  );
}

export { SearchInput };