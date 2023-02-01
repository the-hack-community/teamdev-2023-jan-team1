type InputKeyType = "id" | "label" | "placeholder" | "isRequired" | "type";

// ユーザー名フォームの定数
export const USER_NAME_FIELD = {
  label: "ユーザー名",
  id: "text",
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
