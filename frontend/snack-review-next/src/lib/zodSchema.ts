import { z } from "zod";

// 記事スキーマ
// FIXME: カテゴリ名が正式に決まったら変更する
const categoryNameSchema = z.union([
  z.literal("焼き菓子"),
  z.literal("ケーキ"),
  z.literal("チョコ"),
  z.literal("和菓子"),
  z.literal("その他"),
]);

const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  categoryName: categoryNameSchema,
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
export type CategoryNameType = z.infer<typeof categoryNameSchema>;

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
