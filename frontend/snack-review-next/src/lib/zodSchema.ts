import { z } from "zod";

export const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  categoryName: z.string(),
  categoryColor: z.string(),
  shopsInformation: z.string(),
  url: z.string(),
  imageUrl: z.string(),
  userName: z.string(),
  allowEditFlag: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const articleArraySchema = z.array(articleSchema);

export const articlesSchema = z.object({
  popularArticles: articleArraySchema,
  newArticles: articleArraySchema,
});

export type ArticlesType = z.infer<typeof articlesSchema>;
export type ArticleType = z.infer<typeof articleSchema>;
export type ArticlesArrayType = z.infer<typeof articleArraySchema>;

// プロフィールスキーマ
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const myProfileSchema = z.object({
  user: userSchema,
  articles: articleArraySchema,
});

export type MyProfileType = z.infer<typeof myProfileSchema>;
export type UserType = z.infer<typeof userSchema>;
