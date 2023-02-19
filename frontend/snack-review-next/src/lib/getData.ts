import "server-only";

import { articlesSchema, myProfileSchema, articleSchema } from "./zodSchema";
import { BASE_URL, GET_ARTICLES, GET_MY_PROFILE, getArticlePath } from "@/constants/endpoint";

export const getUserData = async () => {
  const res = await fetch(GET_MY_PROFILE, { cache: "no-store" });
  const data = await res.json();
  return myProfileSchema.parse(data);
};

export const getArticles = async () => {
  const res = await fetch(GET_ARTICLES, { cache: "no-store" });
  const data = await res.json();
  return articlesSchema.parse(data);
};

export const getArticle = async (id: string) => {
  const res = await fetch(getArticlePath(id), { cache: "no-store" });
  const data = await res.json();
  return articleSchema.parse(data);
};

export const validateUserToken = async (accessToken:string | undefined) => {
  if (!accessToken) return false;
  const res = await fetch(`${BASE_URL}/auth/validate_token`, {
    cache: "no-store",
    headers: {
      "Authorization": `${accessToken}`,
    }});
  const data = await res.json();
  return data.success;
};
