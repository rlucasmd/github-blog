import styled from "styled-components";
type RegualrTextProps = {
  size?: "s" | "m";
  color?: "text" | "label" | "subtitle";
}

type TitleTextProps = {
  size?: "s" | "m" | "l";
  color?: "title" | "subtitle";
  weight?: number;
}

const TitleText = styled.h1<TitleTextProps>`
  font-family: "Nunito", sans-serif;
  font-weight: ${({weight}) => weight ?? 700};
  font-size: ${({theme, size}) => theme.textSizes[`title-${size ?? "l"}`]};
  color: ${({theme, color}) => theme.colors[`base-${color ?? "title"}`]};
  line-height: ${({size}) => size === "l" ? 1.3 : 1.6};
`;

const RegularText = styled.p<RegualrTextProps>`
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: ${({theme, size}) => theme.textSizes[`text-${size ?? "m"}`]};
  color: ${({theme, color}) => theme.colors[`base-${color ?? "text"}`]};
`;



export { TitleText, RegularText };