import { getBooks } from "../api/books/books";
import { getBooksArgs } from "../api/books/types";
import { useAsyncFn } from "react-use";

const useBooks = (settings?: getBooksArgs) => {
  const [books, fetchBooks] = useAsyncFn(
    (settings = null) => getBooks(settings),
    [settings]
  );
  return { books, fetchBooks };
};

export default useBooks;
