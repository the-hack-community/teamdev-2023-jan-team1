"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/Logo";
import PostLogin from "@/component/modules/LogionModule";
import { EMAIL_FIELD, PASSWORD_FIELD } from "@/constants/InputField";

export const LoginComponent = () => {
  const router = useRouter();
  // username
  const [email, setEmail] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState<string>("");

  // password
  const [password, setPassword] = useState<string>("");
  const [passwordValidation, setPasswordValidation] = useState<string>("");

  // 空チェック(apiから全網羅のエラーが帰ってこないからフロントで制御してます)
  const vallidationChack = () => {
    setEmailValidation("");
    setPasswordValidation("");
    // 空文字チェック
    if (email.length === 0) {
      setEmailValidation("ユーザー名を入力してください");
    }
    if (password.length === 0) {
      setPasswordValidation("パスワードを入力してください");
    }
    if (email.length !== 0 && password.length !== 0) {
      setEmailValidation("メールアドレスまたはパスワードが正しくありません");
      setPasswordValidation("メールアドレスまたはパスワードが正しくありません");
    }
  };

  // 新規登録ボタンのイベント
  const handleClick = async () => {
    const inputValues = { email, password };
    // バリデーションのリセット

    // TODO: 型定義
    const res: any = await PostLogin(inputValues);

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
        <p className="font-bold">ログインする</p>
      </div>
      <div className="flex w-full flex-col gap-6">
        <InputField {...EMAIL_FIELD} onChange={(e) => setEmail(e.target.value)} validation={emailValidation} />
        <InputField {...PASSWORD_FIELD} onChange={(e) => setPassword(e.target.value)} validation={passwordValidation} />
        <CommonButton isPrimary handleClick={handleClick}>
          ログイン
        </CommonButton>
      </div>
      <div className="mt-8">
        <p className="font-bold">
          新規登録は
          <Link href="/signup" className="ml-1 text-blue-400">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
};
