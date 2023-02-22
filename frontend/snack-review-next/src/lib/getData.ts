import "server-only";

import { articlesSchema, articleSchema } from "./zodSchema";
import { getArticlePath } from "@/constants/endpoint";

export const getArticles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles`, {
    cache: "no-store",
  });
  const data = await res.json();
  return articlesSchema.parse(data);
};

export const getArticle = async (id: string) => {
  const res = await fetch(getArticlePath(id), { cache: "no-store" });
  const data = await res.json();
  return articleSchema.parse(data);
};
