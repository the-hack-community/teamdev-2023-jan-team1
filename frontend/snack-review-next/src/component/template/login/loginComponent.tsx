import Link from "next/link";
import React from "react";

import { Button } from "@/component/atoms/button/button";
import EmailForm from "@/component/atoms/form/email";
import PasswordForm from "@/component/atoms/form/password";
import Logo from "@/component/atoms/logo/logo";

const LoginComponent = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-16 mb-14">
        <p>ログインする</p>
      </div>
      <EmailForm />
      <PasswordForm />
      <Button text="ログイン" />
      <div className="mt-8">
        <p>
          新規登録は
          <Link href="/signup" className="ml-1 text-blue-700">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
