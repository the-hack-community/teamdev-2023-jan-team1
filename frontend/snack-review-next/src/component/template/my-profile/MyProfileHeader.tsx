"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { logout } from "@/lib/authModule";

export const MyProfileHeader: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="my-6 grid grid-cols-3 items-center gap-6">
      <h2 className="col-span-2 font-bold">アカウント情報</h2>

      <CommonButton type="button" isPrimary={false} handleClick={handleClick}>
        ログアウト
      </CommonButton>
    </div>
  );
};
