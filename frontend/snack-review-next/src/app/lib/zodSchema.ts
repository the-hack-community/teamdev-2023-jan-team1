import { z } from "zod";

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
  allowEdit_flag: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

const articleArraySchema = z.array(articleSchema);

export const articlesSchema = z.object({
  popularArticles: articleArraySchema,
  newArticles: articleArraySchema,
});

export type ArticlesType = z.infer<typeof articlesSchema>;
export type ArticleType = z.infer<typeof articleSchema>;
export type CategoryNameType = z.infer<typeof categoryNameSchema>;
