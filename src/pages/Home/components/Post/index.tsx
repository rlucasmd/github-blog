import { RegularText, TitleText } from "../../../../components/Typography";
import { PostContainer } from "./styles";

type PostProps = {
  title: string;
  body: string;
  published_at: string;
  number: number;
}

function Post({ title, body, published_at, number }: PostProps) {
  return (
    <PostContainer to={`/post/${number}`}>
      <div>
        <TitleText as="h3" size="m">
          {title}
        </TitleText>
        <RegularText size="s" color="span">
          {published_at}
        </RegularText>
      </div>
      <RegularText size="m" color="text">
        {body}
      </RegularText>
    </PostContainer>
  );
}

export { Post };