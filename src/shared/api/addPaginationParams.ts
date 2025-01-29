import { SEARCH_PARAMS } from "../constants/searchParams";
import { IPaginationParams } from "../interfaces";

export const addPaginationParams = (url: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  const pageNumber = searchParams.get(SEARCH_PARAMS.PAGE_NUMBER) || "0";
  const size = "10";

  const fullUrl = "https://example.com" + url;
  const urlObj = new URL(fullUrl);

  urlObj.searchParams.append("page_number", pageNumber);
  urlObj.searchParams.append("size", size);

  return urlObj.pathname + urlObj.search;
};
