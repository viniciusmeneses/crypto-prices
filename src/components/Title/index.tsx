import { HTMLAttributes } from "react";

import { theme } from "../../Theme";
import { StyledTitle } from "./styles";

export type TitleProps = HTMLAttributes<HTMLParagraphElement> & {
  color?: keyof typeof theme["colors"] | string;
};

export const Title = StyledTitle;
