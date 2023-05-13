import { RegularText, TitleText } from "../../../../components/Typography";
import { LinkWithIcon } from "../../../../components/LinkWithIcon";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { 
  ProfileContainer, 
  ProfileContent, 
  ProfileInformation, 
  ProfileContentHeader, 
  ProfilePicture
} from "./styles";

function Profile(){
  return(
    <ProfileContainer>
      <ProfilePicture src="https://github.com/ranieri3232.png" />
      <ProfileContent>
        <ProfileContentHeader>
          <div>
            <TitleText>
              Ranieri Lucas
            </TitleText>
            <LinkWithIcon text="Github"/>
          </div>
          <RegularText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus voluptate. 
          </RegularText>
        </ProfileContentHeader>

        <ProfileInformation>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}/>
              <RegularText color="subtitle">ranieri3232</RegularText>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding}/>
              <RegularText color="subtitle">Estudante</RegularText>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup}/>
              <RegularText color="subtitle">0 seguidores</RegularText>
            </li>
          </ul>
        </ProfileInformation>

      </ProfileContent>
    </ProfileContainer>

  );
}

export { Profile };