import { ProfileContainer, ProfileContent } from "./styles";

function Profile(){
  return(
    <ProfileContainer>
      <img src="https://github.com/ranieri3232.png" />
      <ProfileContent>
        <h1>Ranieri Lucas</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus voluptate, </p>

      </ProfileContent>
    </ProfileContainer>

  );
}

export { Profile };