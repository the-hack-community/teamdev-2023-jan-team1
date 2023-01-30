type InputKeyType = "id" | "label" | "placeholder" | "isRequired";

// メールフォームの定数
export const USER_NAME_FIELD = {
  label: "ユーザー名",
  id: "text",
  placeholder: "username",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// メールフォームの定数
export const EMAIL_FIELD = {
  label: "メールアドレス",
  id: "email",
  placeholder: "mail@example.com",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// パスワードフォームの定数
export const PASSWORD_FIELD = {
  label: "パスワード",
  id: "password",
  placeholder: "your password",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;

// パスワード確認フォームの定数
export const PASSWORD_FIELD_VERIFICATION = {
  label: "パスワード確認",
  id: "password",
  placeholder: "your password",
  isRequired: true,
} satisfies Record<InputKeyType, string | boolean>;
