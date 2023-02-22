import useSWR from "swr";
import type { ArticlesType } from "./zodSchema";
import { getArticles } from "@/lib/authModule";

export const useArticles = () => {
  const url = "http://localhost:3001/api/v1/articles";
  const { data, error } = useSWR<ArticlesType>(url, getArticles);

  const loading = !data && !error;

  return {
    data,
    loading,
  };
};
