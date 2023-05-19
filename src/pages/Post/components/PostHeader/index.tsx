import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkWithIcon } from "../../../../components/LinkWithIcon";
import { RegularText, TitleText } from "../../../../components/Typography";
import { PostHeaderContainer, PostHeaderDetails } from "./styles";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPost } from "../../../Home";
import { Spinner } from "../../../../components/Spinner";

type PostHeaderProps = {
  postData: IPost;
  isLoading: boolean;
}




function PostHeader({ postData, isLoading }: PostHeaderProps) {
  if (isLoading)
    return <Spinner />;
  return (
    <PostHeaderContainer>
      <div>
        <LinkWithIcon
          text="voltar"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant={"left-icon"}
          href="/"
        />
        <LinkWithIcon text="Ver no github" />
      </div>

      <TitleText
        size="l"
      >
        {postData.title}
      </TitleText>

      <PostHeaderDetails>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <RegularText color="span">{postData.user.login}</RegularText>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          <RegularText color="span">Há 1 dia</RegularText>
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          <RegularText color="span">{postData.comments}</RegularText>
        </li>
      </PostHeaderDetails>

    </PostHeaderContainer>
  );
}


export { PostHeader };