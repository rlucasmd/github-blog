import { RegularText, TitleText } from "../../../../components/Typography";
import { PostContainer } from "./styles";

type PostProps = {
  title: string;
  content: string;
  publishedAt: string;
}

function Post({title, content, publishedAt} : PostProps){
  return (
    <PostContainer to="/">
      <div>
        <TitleText as="h3" size="m">
          {title}
        </TitleText>
        <RegularText size="s" color="span">
          {publishedAt}
        </RegularText>
      </div>
      <RegularText size="m" color="text">
        {content}
      </RegularText>
    </PostContainer>
  );
}

export { Post };