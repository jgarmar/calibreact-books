import { HTMLAttributes } from "react";

export type ThumbnailImageProps = HTMLAttributes<HTMLElement> & {
  src: string;
  alt: string;
};
