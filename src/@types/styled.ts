import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type DefaultThemeType = typeof defaultTheme;


declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DefaultThemeType{}
}


