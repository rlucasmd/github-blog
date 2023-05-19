import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkWithIcon } from "../../../../components/LinkWithIcon";
import { RegularText, TitleText } from "../../../../components/Typography";
import { PostHeaderContainer, PostHeaderDetails } from "./styles";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PostHeaderProps = {
  title: string;
  publishedAt: string;
  author: string;
  comments: number;
}


function PostHeader({
  title, 
  publishedAt, 
  author, 
  comments
} : PostHeaderProps){
  return(
    <PostHeaderContainer>
      <div>
        <LinkWithIcon 
          text="voltar" 
          icon={<FontAwesomeIcon icon={faChevronLeft}/>} 
          variant={"left-icon"}
          href="/"  
        />
        <LinkWithIcon text="Ver no github"/>
      </div>

      <TitleText 
        size="l" 
      >
        {title}
      </TitleText>

      <PostHeaderDetails>
        <li>
          <FontAwesomeIcon icon={faGithub}/>
          <RegularText color="span">{author}</RegularText>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar}/>
          <RegularText color="span">Há 1 dia</RegularText>
        </li>
        <li>
          <FontAwesomeIcon icon={faComment}/>
          <RegularText color="span">{comments}</RegularText>
        </li>
      </PostHeaderDetails>

    </PostHeaderContainer>
  );
}


export { PostHeader };