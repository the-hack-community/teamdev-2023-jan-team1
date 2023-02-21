import useSWR, { Fetcher } from "swr";
import { axiosClient } from "./helpers";
import { CategoryType } from "./zodSchema";

const fetcher: Fetcher<CategoryType> = async (url: string) => {
  const res = await axiosClient.get(url);
  return res.data;
};

export const useCategories = () => {
  const { data, isLoading } = useSWR("http://localhost:3001/api/v1/categories", fetcher);

  return {
    categories: data?.categories,
    isLoading,
  };
};
