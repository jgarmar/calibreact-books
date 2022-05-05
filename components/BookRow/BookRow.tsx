import * as Styles from "./BookRow.styles";

import { BookRowProps } from "./BookRow.types";
import CoverImage from "../CoverImage";
import ThumbnailImage from "../ThumbnailImage";
import { debugLog } from "../../utils";

const BookRow = ({ book }: BookRowProps) => {
  const authors = book?.authors?.length && book.authors.join(", ");
  const title = book?.title;
  const thumbnail = book?.thumbnail;
  const coverImage = book?.cover;
  return (
    <Styles.Container onClick={() => debugLog(book)}>
      <ThumbnailImage src={thumbnail} alt={title} />
      <CoverImage src={coverImage} alt={title} />

      <p>
        {title} - {authors}
      </p>
    </Styles.Container>
  );
};
export default BookRow;
