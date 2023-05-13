import { ReactNode } from "react";
import { LinkWithIconContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface LinkWithIconProps {
  text: string;
  iconLeft?: boolean;
  icon?: ReactNode;
}

function LinkWithIcon({ text, icon, iconLeft } : LinkWithIconProps){
  return (
    <LinkWithIconContainer variant={!!iconLeft}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare}/>}
    </LinkWithIconContainer>
  );
}

export { LinkWithIcon };