import { HTMLAttributes } from "react";

import { theme } from "../../theme";
import { StyledText } from "./styles";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  color?: keyof typeof theme["colors"] | string;
};

export const Text = StyledText;
