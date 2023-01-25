import Link from "next/link";

import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/logo";

import { EMAIL_FIELD, PASSWORD_FIELD } from "@/constants/InputField";

export const LoginComponent = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-12">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-16 mb-14">
        <p className="font-bold">ログインする</p>
      </div>
      <InputField {...EMAIL_FIELD} />
      <InputField {...PASSWORD_FIELD} />

      <div className="w-full">
        <CommonButton isPrimary>ログイン</CommonButton>
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
