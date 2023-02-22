/* eslint-disable @typescript-eslint/no-non-null-assertion */

"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import type { FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";
import { FormStateType } from "@/constants/InputField";
import { useUser } from "@/lib/useUser";
import { editUserSchema } from "@/lib/zodSchema";

type Props = {
  label: "メールアドレス" | "ユーザー名" | "パスワード";
  setIsEditing: (arg: boolean) => void;
};

export const UserInfoFieldInput: FC<Props> = ({ label, setIsEditing }) => {
  const { data: userData } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>({
    resolver: zodResolver(editUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userData?.user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        uid: Cookies.get("uid")!,
        client: Cookies.get("client")!,
        access_token: Cookies.get("access-token")!,
      },
      body: JSON.stringify(data),
    });
  });

  return (
    <div className="px-2 py-2.5">
      <form className="flex items-center gap-3" onSubmit={onSubmit}>
        <InputField
          isRequired={false}
          register={register}
          errors={errors}
          name={label === "パスワード" ? "password" : "name"}
        />
        <CommonButton type="submit" isPrimary>
          保存
        </CommonButton>
        <XMarkIcon className="h-8" onClick={() => setIsEditing(false)} />
      </form>
    </div>
  );
};
