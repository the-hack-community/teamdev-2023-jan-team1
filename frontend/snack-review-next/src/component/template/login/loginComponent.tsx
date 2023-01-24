import Link from "next/link";

import { Button } from "@/component/atoms/button/button";
import { EmailForm, PasswordForm } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/logo";

import { REQUEST_STATE } from "@/constants/InputField";

export const LoginComponent = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-12">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-16 mb-14">
        <p className="font-bold">ログインする</p>
      </div>
      <EmailForm />
      <PasswordForm />
      <div className="mt-6">
        <Button text="ログイン" />
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
