import { z } from "zod";
import { ERROR_CATEGORY, ERROR_REQUIRED, ERROR_URL, ERROR_LENGTH } from "../constants/InputField";

// 記事取得スキーマ
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

// 記事投稿フォームスキーマ
const CATEGORY_EXCLUDE = new RegExp("^(?!.*default)");

export const postArticleSchema = z.object({
  title: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH),
  content: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH),
  category: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH).regex(CATEGORY_EXCLUDE, ERROR_CATEGORY),
  shopUrl: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH).url(ERROR_URL),
  shopInfo: z.string().max(300, ERROR_LENGTH).optional(),
});
