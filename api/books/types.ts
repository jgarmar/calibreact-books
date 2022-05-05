export type Book = {
  series_index?: null;
  tags?: (string)[] | null;
  thumbnail: string;
  title_sort: string;
  authors?: (string)[] | null;
  user_metadata: UserMetadata;
  author_link_map: AuthorsOrAuthorLinkMapOrAuthorSortMap;
  series?: null;
  author_sort: string;
  application_id: number;
  author_sort_map: AuthorsOrAuthorLinkMapOrAuthorSortMap;
  user_categories: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
  comments?: null;
  languages?: (string)[] | null;
  uuid: string;
  rating: number;
  last_modified: string;
  pubdate: string;
  identifiers: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
  timestamp: string;
  publisher?: null;
  cover: string;
  title: string;
  format_metadata: FormatMetadata;
  formats?: (string)[] | null;
  main_format: MainFormat;
  other_formats: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
  category_urls: CategoryUrls;
}
export type UserMetadata = {
  #tipo: #tipo;
  #volumen: #volumen;
}
export type #tipo = {
  table: string;
  column: string;
  datatype: string;
  is_multiple?: null;
  kind: string;
  name: string;
  search_terms?: (string)[] | null;
  label: string;
  colnum: number;
  display: Display;
  is_custom: boolean;
  is_category: boolean;
  link_column: string;
  category_sort: string;
  is_csp: boolean;
  is_editable: boolean;
  rec_index: number;
  #value#: string;
  #extra#?: null;
  is_multiple2: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
}
export type Display = {
  use_decorations: number;
}
export type IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats = {
}
export type #volumen = {
  table: string;
  column: string;
  datatype: string;
  is_multiple?: null;
  kind: string;
  name: string;
  search_terms?: (string)[] | null;
  label: string;
  colnum: number;
  display: Display1;
  is_custom: boolean;
  is_category: boolean;
  link_column: string;
  category_sort: string;
  is_csp: boolean;
  is_editable: boolean;
  rec_index: number;
  #value#?: null;
  #extra#?: null;
  is_multiple2: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
}
export type Display1 = {
  number_format?: null;
}
export type AuthorsOrAuthorLinkMapOrAuthorSortMap = {
  Desconocido: string;
}
export type FormatMetadata = {
  pdf: Pdf;
}
export type Pdf = {
  path: string;
  size: number;
  mtime: string;
}
export type MainFormat = {
  pdf: string;
}
export type CategoryUrls = {
  tags: Tags;
  #tipo: #tipo1;
  authors: AuthorsOrAuthorLinkMapOrAuthorSortMap;
  series: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
  languages: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
  publisher: IsMultiple2OrSeriesOrLanguagesOrPublisherOrUserCategoriesOrIdentifiersOrOtherFormats;
}
export type Tags = {
  magia: string;
}
export type #tipo1 = {
  incompleto: string;
}


export type getBooksArgs = {
    categoryUrls?: boolean;
    idIsUuid?: boolean;
    ids?: string | "all";
    deviceForTemplate?: string;
}

export type getBookArgs = {

    categoryUrls?: boolean;
    idIsUuid?: boolean;
    id?: string;
        deviceForTemplate?: string;

}