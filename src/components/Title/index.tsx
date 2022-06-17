import { HTMLAttributes } from "react";

import { theme } from "../../theme";
import { StyledTitle } from "./styles";

export type TitleProps = HTMLAttributes<HTMLParagraphElement> & {
  color?: keyof typeof theme["colors"] | string;
};

export const Title = StyledTitle;
