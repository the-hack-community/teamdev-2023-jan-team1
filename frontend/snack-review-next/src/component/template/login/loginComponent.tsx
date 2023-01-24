import Link from "next/link";

import { Button } from "@/component/atoms/button/button";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/logo";

import { RED_COLOR } from "@/constants/Colr";
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
      <InputField label={EMAIL_FIELD.LABEL} inputId={EMAIL_FIELD.INPUT_ID} placeholder={EMAIL_FIELD.PLACEHOLDER} />
      <InputField
        label={PASSWORD_FIELD.LABEL}
        inputId={PASSWORD_FIELD.INPUT_ID}
        placeholder={PASSWORD_FIELD.PLACEHOLDER}
      />

      <div className="mt-6">
        <Button text="ログイン" color={RED_COLOR.BUTTON_COLOR} hoverColor={RED_COLOR.BUTTON_HOVER_COLOR} />
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
