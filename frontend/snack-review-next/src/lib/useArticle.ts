import useSWR from "swr";
import type { ArticleType } from "./zodSchema";
import { getArticles } from "@/lib/authModule";

export const useArticle = (id: string) => {
  const url = `http://localhost:3001/api/v1/articles/${id}`;
  const { data, error } = useSWR<ArticleType>(url, getArticles);

  const loading = !data && !error;

  return {
    data,
    loading,
  };
};
