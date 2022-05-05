import * as Styles from "./CoverImage.styles";

import { CoverImageProps } from "./CoverImage.types";
import Image from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const CoverImage = ({ src, alt }: CoverImageProps) => {
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
export default CoverImage;
