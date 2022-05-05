import React, { useEffect } from "react";

import BookRow from "../../components/BookRow";
import { getBooks } from "../../api/books/books";
import useBooks from "../../hooks/useBooks";

const BooksPage = ({ books }) => {
  return (
    <div>
      {books.map((book: any, i: number) => (
        <BookRow key={i} book={book} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const books = await getBooks();

  return {
    props: {
      books: Object.values(books),
    },
  };
}

export default BooksPage;
