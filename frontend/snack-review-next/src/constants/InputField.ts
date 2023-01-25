type InputKeyType = "id" | "label" | "placeholder" | "isRequired";

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
