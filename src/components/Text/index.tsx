import { HTMLAttributes } from "react";

import { theme } from "../../Theme";
import { StyledText } from "./styles";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  color?: keyof typeof theme["colors"];
  size?: "large" | "normal" | "small";
};

export const Text = StyledText;
