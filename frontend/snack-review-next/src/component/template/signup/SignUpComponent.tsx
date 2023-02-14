"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/Logo";

import HandleSignUp from "@/component/modules/SignupModule";
import { EMAIL_FIELD, PASSWORD_FIELD, PASSWORD_FIELD_VERIFICATION, USER_NAME_FIELD } from "@/constants/InputField";

// type Response = { resState: string; erroy?: Array<string> | undefined };

export const SignUpComponent = () => {
  const router = useRouter();
  // username
  const [userName, setUserName] = useState<string>("");
  const [userNameValidation, setUserNameValidation] = useState<string>("");
  // email
  const [email, setEmail] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState<string>("");
  // password
  const [password, setPassword] = useState<string>("");
  const [passwordValidation, setPasswordValidation] = useState<string>("");
  // password確認用
  const [passwordVerification, setPasswordVerification] = useState<string>("");
  const [passwordVerificationValidation, setPasswordVerificationValidation] = useState<string>("");

  // 空チェック(apiから全網羅のエラーが帰ってこないからフロントで制御してます)
  // TODO: 不正なメールアドレスの時のバリデーション（apiからの戻り値から判定する）
  const vallidationChack = () => {
    // バリデーションのリセット
    setUserNameValidation("");
    setEmailValidation("");
    setPasswordValidation("");
    setPasswordVerificationValidation("");

    // 空文字チェック
    if (userName.length === 0) {
      setUserNameValidation("ユーザー名を入力してください");
    }
    if (email.length === 0) {
      setEmailValidation("メールアドレスを入力してください");
    }
    if (password.length === 0) {
      setPasswordValidation("パスワードを入力してください");
    } else if (password.length <= 5) {
      setPasswordValidation("6桁以上のパスワードを設定してください");
    }
    if (passwordVerification.length === 0) {
      setPasswordVerificationValidation("パスワード確認を入力してください");
    } else if (passwordVerification.length <= 5) {
      setPasswordVerificationValidation("6桁以上のパスワードを設定してください");
    }
    // パスワードの差分チェック
    if (password !== passwordVerification) {
      setPasswordValidation("パスワードが違います");
      setPasswordVerificationValidation("パスワードが違います");
    }
  };

  // 新規登録ボタンのイベント
  const handleClick = async () => {
    const inputValues = { userName, email, password, passwordVerification };

    // TODO: 型定義
    const res: any = await HandleSignUp(inputValues);

    // サインアップ成功時
    if (res.resState === "succes") {
      router.push("/");
    }

    // サインアップ失敗時
    if (res.resState === "faild") {
      vallidationChack();
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center px-12">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-16 mb-14">
        <p className="font-bold">新規登録する</p>
      </div>
      <div className="flex w-full flex-col gap-6">
        <InputField
          {...USER_NAME_FIELD}
          onChange={(e) => setUserName(e.target.value)}
          validation={userNameValidation}
        />
        <InputField {...EMAIL_FIELD} onChange={(e) => setEmail(e.target.value)} validation={emailValidation} />
        <InputField {...PASSWORD_FIELD} onChange={(e) => setPassword(e.target.value)} validation={passwordValidation} />
        <InputField
          {...PASSWORD_FIELD_VERIFICATION}
          onChange={(e) => setPasswordVerification(e.target.value)}
          validation={passwordVerificationValidation}
        />
        <CommonButton isPrimary handleClick={handleClick}>
          新規登録
        </CommonButton>
      </div>
      <div className="mt-8">
        <p className="font-bold">
          すでにアカウントをお持ちの方は
          <Link href="/login" className="ml-1 text-blue-400">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
};
