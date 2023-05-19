import styled, { css } from "styled-components";

type LinkWithIconProps = {
  variant: "left-icon" | undefined;
}

const LinkWithIconContainer = styled.a<LinkWithIconProps>`
  display: flex;
  border: none;
  gap: 0.5rem;
  width: auto;

  line-height: 19px;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  font-size: ${({theme}) => theme.textSizes["text-s"]};
  color: ${({theme}) => theme.colors.blue};
  text-transform: uppercase;
  cursor: pointer;

  height: 19px;

  border-bottom: 1px solid transparent;

  align-items: center;
  justify-content: center;

  transition: 0.4s;

  &:hover{
    border-color: ${({theme}) => theme.colors.blue};
  }

  svg{
    height: 0.75rem;
    width: 0.75rem;
  }

  ${({variant}) => variant === "left-icon" && css`
    flex-direction: row-reverse;
  `}
`;

export { LinkWithIconContainer };