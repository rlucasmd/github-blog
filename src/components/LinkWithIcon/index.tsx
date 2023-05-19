import { AnchorHTMLAttributes, ReactNode } from "react";
import { LinkWithIconContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface LinkWithIconProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  text: string;
  variant?: "left-icon";
  icon?: ReactNode;
}

function LinkWithIcon({ text, icon, variant, ...rest } : LinkWithIconProps){
  return (
    <LinkWithIconContainer variant={variant} {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare}/>}
    </LinkWithIconContainer>
  );
}

export { LinkWithIcon };