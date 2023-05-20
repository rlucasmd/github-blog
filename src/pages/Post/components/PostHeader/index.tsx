import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkWithIcon } from "../../../../components/LinkWithIcon";
import { RegularText, TitleText } from "../../../../components/Typography";
import { PostHeaderContainer, PostHeaderDetails } from "./styles";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPost } from "../../../Home";
import { Spinner } from "../../../../components/Spinner";
import { useNavigate } from "react-router-dom";

type PostHeaderProps = {
  postData: IPost;
  isLoading: boolean;
}




function PostHeader({ postData, isLoading }: PostHeaderProps) {

  const navigate = useNavigate();

  function goBack(){
    navigate(-1);
  }
  if (isLoading)
    return <Spinner />;
  return (
    <PostHeaderContainer>
      <div>
        <LinkWithIcon
          text="voltar"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant={"left-icon"}
          onClick={goBack}
        />
        <LinkWithIcon 
          text="Ver no github"
          href={postData.html_url} 
        />
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