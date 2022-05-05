import * as Styles from "./ThumbnailImage.styles";

import Image from "next/image";
import { ThumbnailImageProps } from "./ThumbnailImage.types";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const ThumbnailImage = ({ src, alt }: ThumbnailImageProps) => {
  return (
    <Styles.Container>
      <Image
        alt={alt}
        src={`${publicRuntimeConfig.host}${src}`}
        layout="fill"
        objectFit="contain"
      />
    </Styles.Container>
  );
};
export default ThumbnailImage;
