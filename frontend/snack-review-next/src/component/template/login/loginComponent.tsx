import React from "react";
import Link from "next/link";

import EmailForm from "@/component/atoms/form/email";
import PasswordForm from "@/component/atoms/form/password";
import Logo from "@/component/atoms/logo/logo";
import { Button } from "@/component/atoms/button/button";

const LoginComponent = () => {
  return (
    <>
      <div className="text-center mt-20">
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
            <Link href={"/signup"} className="text-blue-700 ml-1">
              こちら
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
