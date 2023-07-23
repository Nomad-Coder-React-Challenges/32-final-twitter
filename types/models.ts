export interface CategoryListModel<T> {
  copyright: string;
  results: T;
  num_results: number;
  status: string;
}

export interface CategoryResultModel {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
}

export interface BookResultModel {
  bestsellers_date: string;
  books: BooksModel[];
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  next_published_date: string;
  normal_list_ends_at: number;
  previous_published_date: string;
  published_date: string;
  published_date_description: string;
  updated: string;
}

export interface BooksModel {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  asterisk: number;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: BooksBuyLinksModel[];
  contributor: string;
  contributor_note: string;
  dagger: number;
  description: string;
  first_chapter_link: string;
  isbns: BooksISBNModel[];
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  weeks_on_list: number;
}

export interface BooksBuyLinksModel {
  name: string;
  url: string;
}

export interface BooksISBNModel {
  isbn10: string;
  isbn13: string;
}

export interface GetResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: unknown;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: unknown;
  headers: Headers2;
  baseURL: string;
  method: string;
  url: string;
}

export interface Headers2 {
  Accept: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Headers {
  'content-type': string;
}

export interface ServerResponse {
  resultCode: number;
  data: string;
}

export interface CheckResponse {
  resultCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: ProfileResponse;
}

export interface ProfileResponse {
  id: number;
}

export interface AuthSignInReqModel {
  email: string;
  password: string;
}

export interface AuthSignUpReqModel {
  name: string;
  email: string;
  password: string;
}

export interface WriteReqModel {
  content: string;
}
