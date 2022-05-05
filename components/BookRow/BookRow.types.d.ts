import { HTMLAttributes } from "react";
import { Book } from "../../api/books/types";

export type BookRowProps = HTMLAttributes<HTMLElement> & { book: Book };
