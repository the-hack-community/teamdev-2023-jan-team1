"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/Logo";

import HandleSignUp from "@/component/modules/LoginModule";
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
  const vallidationChack = () => {
    // 空文字チェック
    if (userName.length === 0) {
      setUserNameValidation("ユーザー名を入力してください");
    }
    if (email.length === 0) {
      setEmailValidation("メールアドレスを入力してください");
    }
    if (password.length === 0) {
      setPasswordValidation("パスワードを入力してください");
    }
    if (passwordVerification.length === 0) {
      setPasswordVerificationValidation("パスワード確認を入力してください");
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
    // バリデーションのリセット
    setUserNameValidation("");
    setEmailValidation("");
    setPasswordValidation("");
    setPasswordVerificationValidation("");

    vallidationChack();

    const res: any = await HandleSignUp(inputValues);

    // サインアップ成功時
    if (res.resState === "succes") {
      router.push("/");
    }

    // FIXME: サインアップ失敗時(レスポンスから判断)
    // const errorList = res.erroy;
    // if (res.resState === "faild") {
    //   // eslint-disable-next-line array-callback-return
    //   errorList.map((validation: string) => {
    //     switch (validation) {
    //       case "Password required":
    //         console.log("パスワードが違います");
    //         break;
    //       case "Email required":
    //         console.log("有効なメールアドレスを入力してください");
    //         break;
    //       default:
    //         break;
    //     }
    //   });
    // }
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
        <div className="mt-6">
          <CommonButton isPrimary handleClick={handleClick}>
            新規登録
          </CommonButton>
        </div>
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
