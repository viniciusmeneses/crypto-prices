import { HTMLAttributes } from "react";

import { theme } from "../../Theme";
import { StyledHeading } from "./styles";

export type HeadingProps = HTMLAttributes<HTMLParagraphElement> & {
  color?: keyof typeof theme["colors"];
  size?: "normal" | "small";
};

export const Heading = StyledHeading;
