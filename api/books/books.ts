import { getBookArgs, getBooksArgs } from "./types";

//fetch  book info with axios
import axios from "axios";
import { fetch } from "../../utils";
import queryString from "query-string";

export const getBook = async (settings?: getBookArgs) => {
  const { categoryUrls, idIsUuid, id } = settings || {};

  const querySnake = queryString.stringify({
    category_urls: categoryUrls,
    id_is_uuid: idIsUuid,
  });
  const response = await fetch.get(`/ajax/book/${id}?${querySnake}`);
  return response.data;
};

export const getBooks = async (settings?: getBooksArgs) => {
  const { categoryUrls = true, idIsUuid = false, ids } = settings || {};

  const querySnake = queryString.stringify({
    category_urls: categoryUrls,
    id_is_uuid: idIsUuid,
    ids: ids || "all",
  });

  const url = `${process.env.HOST}/ajax/books?${querySnake}`;
  console.log(url);
  const response = await axios.get(url);
  return response.data;
};
