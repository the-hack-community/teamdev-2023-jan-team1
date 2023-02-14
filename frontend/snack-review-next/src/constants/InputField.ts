type InputKeyType = "id" | "label" | "placeholder" | "isRequired" | "type" | "name";

// ユーザー名フォームの定数
export const USER_NAME_FIELD = {
  label: "ユーザー名",
  id: "username",
  name: "username",
  type: "text",
  placeholder: "username",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// メールフォームの定数
export const EMAIL_FIELD = {
  label: "メールアドレス",
  id: "email",
  name: "email",
  type: "email",
  placeholder: "mail@example.com",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// パスワードフォームの定数
export const PASSWORD_FIELD = {
  label: "パスワード",
  id: "password",
  name: "password",
  type: "password",
  placeholder: "your password",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// パスワード確認フォームの定数
export const PASSWORD_FIELD_VERIFICATION = {
  label: "パスワード確認",
  id: "confirmPassword",
  name: "confirmPassword",
  type: "password",
  placeholder: "your password",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// 記事タイトルの定数
export const ARTICLE_TITLE = {
  label: "タイトル",
  id: "articleTitle",
  name: "title",
  type: "text",
  placeholder: "タイトルを入れましょう。",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// 記事コンテンツの定数
export const ARTICLE_CONTENT = {
  label: "コンテンツ",
  id: "articleContent",
  name: "content",
  type: "text",
  placeholder: "自分の感想を共有しましょう。",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// 記事のお店URLの定数
export const ARTICLE_SHOP_URL = {
  label: "お店のURL",
  id: "articleShopUrl",
  name: "shopUrl",
  type: "text",
  placeholder: "https://example.com",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// 記事のお店情報の定数
export const ARTICLE_SHOP_INFO = {
  label: "お店の情報",
  id: "articleShopInfo",
  name: "shopInfo",
  type: "text",
  placeholder: "東京都港区青山1-1-1 シェアビル100",
  isRequired: false,
} satisfies Record<InputKeyType, string | boolean>;

// カテゴリの定数
export const CATEGORY = {
  label: "種類",
  id: "category",
  name: "category",
  type: "",
  placeholder: "",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;
