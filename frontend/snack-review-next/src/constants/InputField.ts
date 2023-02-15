type InputKeyType = "id" | "label" | "placeholder" | "isRequired" | "type";

// エラーメッセージ
export const ERROR_REQUIRED = "必須項目です。";
export const ERROR_URL = "無効なURLです。";
export const ERROR_CATEGORY = "種類を選択してください。";
export const ERROR_LENGTH = "300文字以内で入力してください。";

// フォーム初期値
export type ArticleStateKeyType = "title" | "content" | "category" | "shopUrl" | "shopInfo";
export type ArticleStateType = Record<ArticleStateKeyType, string>;

export const initialState = {
  title: "",
  content: "",
  category: "default",
  shopUrl: "",
  shopInfo: "",
} satisfies ArticleStateType;

// ユーザー名フォームの定数
export const USER_NAME_FIELD = {
  label: "ユーザー名",
  id: "username",
  type: "text",
  placeholder: "username",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// メールフォームの定数
export const EMAIL_FIELD = {
  label: "メールアドレス",
  id: "email",
  type: "email",
  placeholder: "mail@example.com",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// パスワードフォームの定数
export const PASSWORD_FIELD = {
  label: "パスワード",
  id: "password",
  type: "password",
  placeholder: "your password",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// パスワード確認フォームの定数
export const PASSWORD_FIELD_VERIFICATION = {
  label: "パスワード確認",
  id: "confirmPassword",
  type: "password",
  placeholder: "your password",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// フォームフィールドの型
type FormFieldType = Record<InputKeyType, string | boolean> & { name: ArticleStateKeyType };

// 記事タイトルの定数
export const ARTICLE_TITLE = {
  label: "タイトル",
  id: "title",
  name: "title",
  type: "text",
  placeholder: "タイトルを入れましょう。",
  isRequired: true,
} satisfies FormFieldType;

// 記事コンテンツの定数
export const ARTICLE_CONTENT = {
  label: "コンテンツ",
  id: "content",
  name: "content",
  type: "text",
  placeholder: "自分の感想を共有しましょう。",
  isRequired: true,
} satisfies FormFieldType;

// 記事のお店URLの定数
export const ARTICLE_SHOP_URL = {
  label: "お店のURL",
  id: "shopUrl",
  name: "shopUrl",
  type: "text",
  placeholder: "https://example.com",
  isRequired: true,
} satisfies FormFieldType;

// 記事のお店情報の定数
export const ARTICLE_SHOP_INFO = {
  label: "お店の情報",
  id: "shopInfo",
  name: "shopInfo",
  type: "text",
  placeholder: "東京都港区青山1-1-1 シェアビル100",
  isRequired: false,
} satisfies FormFieldType;

// カテゴリの定数
export const CATEGORY = {
  label: "種類",
  id: "category",
  name: "category",
  type: "",
  placeholder: "",
  isRequired: true,
} satisfies FormFieldType;
