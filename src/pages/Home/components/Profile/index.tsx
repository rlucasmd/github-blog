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
import { Spinner } from "../../../../components/Spinner";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

const username = import.meta.env.VITE_USERNAME;

interface IProfile{
  bio: string;
  avatar_url: string;
  company: string;
  followers: number;
  following: number;
  login: string;
  name: string;
  html_url: string;
}

function Profile(){

  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState<IProfile>({} as IProfile);

  const getProfile = useCallback(async () => {
    const response = await api.get<IProfile>(`/users/${username}`);
    // console.log(response.data);
    setProfileData(response.data);
    setIsLoading(false);
  }, []);


  useEffect(() => {
    getProfile();
  }, []);

  return(
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src="https://github.com/ranieri3232.png" />
          <ProfileContent>
            <ProfileContentHeader>
              <div>
                <TitleText>
                  {profileData.name}
                </TitleText>
                <LinkWithIcon text="Github" href={profileData.html_url}/>
              </div>
              <RegularText>
                {profileData.bio}
              </RegularText>
            </ProfileContentHeader>

            <ProfileInformation>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  <RegularText color="subtitle">{profileData.login}</RegularText>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  <RegularText color="subtitle">{profileData.company}</RegularText> 
                </li>
                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <RegularText color="subtitle">{profileData.followers === 1 ? `${profileData.followers} seguidor` : `${profileData.followers} seguidores`}</RegularText>
                </li>
              </ul>
            </ProfileInformation>
          </ProfileContent>
        </>
      )}
      
    </ProfileContainer>

  );
}

export { Profile };