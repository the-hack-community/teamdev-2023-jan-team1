"use client";

import Link from "next/link";

import { useState } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/Logo";

import { HandleSignUp } from "@/component/modules/LoginModule";
import { EMAIL_FIELD, PASSWORD_FIELD, PASSWORD_FIELD_VERIFICATION, USER_NAME_FIELD } from "@/constants/InputField";

export const SignUpComponent = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVerification, setPasswordVerification] = useState<string>("");

  const handleClick = () => {
    const inputValues = { userName, email, password, passwordVerification };
    HandleSignUp(inputValues);
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
        <InputField {...USER_NAME_FIELD} onChange={(e) => setUserName(e.target.value)} />
        <InputField {...EMAIL_FIELD} onChange={(e) => setEmail(e.target.value)} />
        <InputField {...PASSWORD_FIELD} onChange={(e) => setPassword(e.target.value)} />
        <InputField {...PASSWORD_FIELD_VERIFICATION} onChange={(e) => setPasswordVerification(e.target.value)} />
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
