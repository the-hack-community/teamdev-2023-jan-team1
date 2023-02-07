import "server-only";

import { articlesSchema, myProfileSchema } from "./zodSchema";
import { GET_ARTICLES, GET_MY_PROFILE } from "@/constants/endpoint";

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
