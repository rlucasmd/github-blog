import { RegularText, TitleText } from "../../../../components/Typography";
import { PostContainer } from "./styles";

type PostProps = {
  title: string;
  body: string;
  published_at: string;
  html_url: string;
}

function Post({ title, body, published_at, html_url }: PostProps) {
  return (
    <PostContainer to={html_url}>
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