"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { FormStateType } from "@/constants/InputField";
import { loginSchema } from "@/lib/zodSchema";

type Props = {
  label: "メールアドレス" | "ユーザー名" | "パスワード";
  value: string;
  setIsEditing: (arg: boolean) => void;
};

export const UserInfoFieldInput: FC<Props> = ({ label, value, setIsEditing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // TODO: ユーザー情報更新処理
    console.info(data);
  });

  return (
    <div className="px-2 py-2.5">
      <form className="flex items-center gap-3" onSubmit={onSubmit}>
        <InputField
          value={value}
          isRequired={false}
          register={register}
          errors={errors}
          name={label === "メールアドレス" ? "email" : "password"}
        />
        <CommonButton type="submit" isPrimary>
          保存
        </CommonButton>
        <XMarkIcon className="h-8" onClick={() => setIsEditing(false)} />
      </form>
    </div>
  );
};
