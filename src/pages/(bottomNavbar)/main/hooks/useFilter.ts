import {
  IGetPublicThemesProps,
  TThemeSortType,
} from "@/entities/theme/model/interfaces";
import { getPublicThemesApi } from "@/entities/theme/model/themeThunk";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export const useFilter = () => {
  const dispatch = useAppDispatch();

  const params = useLocalSearchParams();

  const [filters, setFilters] = React.useState({
    sortBy: (params.filter as TThemeSortType) || "COMMENTS_ASC",
    searchQuery: (params.search_query as string) || "",
  });

  React.useEffect(() => {
    setFilters({
      sortBy: (params.filter as TThemeSortType) || "COMMENTS_ASC",
      searchQuery: (params.search_query as string) || "",
    });
  }, [params.filter, params.search_query]);

  React.useEffect(() => {
    const data: IGetPublicThemesProps = {
      sort_by: filters.sortBy,
      search_query: filters.searchQuery,
    };
    dispatch(getPublicThemesApi(data));
  }, [filters]);

  return null;
};
