import { z } from "zod";
import {
  ERROR_CATEGORY,
  ERROR_REQUIRED,
  ERROR_URL,
  ERROR_LENGTH,
  ERROR_MIN_LENGTH,
  ERROR_PASSWORD,
  ERROR_EMAIL,
} from "@/constants/InputField";

// 記事取得スキーマ
export const articleSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  content: z.string(),
  categoryName: z.string(),
  categoryColor: z.string(),
  shopsInformation: z.string().nullable(),
  url: z.string(),
  imageUrl: z.string().optional(),
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

// フォームスキーマ
const CATEGORY_EXCLUDE = new RegExp("^(?!.*default)");

export const postArticleSchema = z.object({
  title: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH),
  content: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH),
  category: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH).regex(CATEGORY_EXCLUDE, ERROR_CATEGORY),
  shopUrl: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH).url(ERROR_URL),
  shopInfo: z.string().max(300, ERROR_LENGTH).optional(),
});

export const signupSchema = z
  .object({
    name: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH),
    email: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH).email(ERROR_EMAIL),
    password: z.string().min(6, ERROR_MIN_LENGTH).max(300, ERROR_LENGTH),
    confirmPassword: z.string().min(6, ERROR_MIN_LENGTH).max(300, ERROR_LENGTH),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: ERROR_PASSWORD,
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().min(1, ERROR_REQUIRED).max(300, ERROR_LENGTH).email(ERROR_EMAIL),
  password: z.string().min(6, ERROR_MIN_LENGTH).max(300, ERROR_LENGTH),
});

export type postArticleType = z.infer<typeof postArticleSchema>;

// カテゴリースキーマ

const categorySchema = z.object({
  id: z.number(),
  categoryName: z.string(),
  categoryColor: z.string(),
});

export type CategoryType = { categories: z.infer<typeof categorySchema>[] };
