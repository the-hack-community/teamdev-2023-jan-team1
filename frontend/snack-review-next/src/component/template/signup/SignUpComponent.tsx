"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { Logo } from "@/component/atoms/logo/Logo";
import {
  EMAIL_FIELD,
  PASSWORD_FIELD,
  FormStateType,
  PASSWORD_FIELD_VERIFICATION,
  USER_NAME_FIELD,
} from "@/constants/InputField";
import { login, signup } from "@/lib/authModule";
import { signupSchema } from "@/lib/zodSchema";

export const SignUpComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await signup(data);
    await login({ email: data.email, password: data.password });
    router.replace("/");
    router.refresh();
  });

  return (
    <div className="mt-20 flex flex-col items-center px-12">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-16 mb-14">
        <p className="font-bold">新規登録する</p>
      </div>
      <form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
        <InputField {...USER_NAME_FIELD} register={register} errors={errors} />
        <InputField {...EMAIL_FIELD} register={register} errors={errors} />
        <InputField {...PASSWORD_FIELD} register={register} errors={errors} />
        <InputField {...PASSWORD_FIELD_VERIFICATION} register={register} errors={errors} />
        <div className="mt-4">
          <CommonButton isFullWidth type="submit" isPrimary>
            新規登録
          </CommonButton>
        </div>
      </form>
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
