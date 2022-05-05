import { HTMLAttributes } from "react";

export type CoverImageProps = HTMLAttributes<HTMLElement> & {
  src: string;
  alt: string;
};
