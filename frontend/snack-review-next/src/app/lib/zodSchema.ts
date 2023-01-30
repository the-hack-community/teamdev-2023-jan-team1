import { z } from "zod";

const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  categoryName: z.string(),
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
