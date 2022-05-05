import { getBook, getBooks } from "../../api/books/books";

import { Book } from "../../api/books/types";
import React from "react";
import { tileToSlug as titleToSlug } from "../../utils";

const BookPage = ({ book }: { book: Book }) => {
  return (
    <div>
      <pre>{JSON.stringify(book, null, 4)}</pre>
    </div>
  );
};

export async function getStaticPaths() {
  const books = await getBooks();
  const booksArray = Object.values(books) as Book[];
  const paths = booksArray.map((book: Book) => {
    return {
      params: { bookSlug: book.uuid },
    };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps({
  params,
}: {
  params: { id: string; bookSlug: string };
}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log("fetching book", params.id, params.bookSlug);
  const book = await getBook({ id: params.bookSlug, idIsUuid: true });

  // Pass post data to the page via props
  return { props: { book } };
}
export default BookPage;
