"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useSWRConfig } from "swr";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { logout } from "@/lib/authModule";

export const MyProfileHeader: FC = () => {
  const { cache } = useSWRConfig();
  const router = useRouter();

  const handleClick = () => {
    logout();
    cache.delete("http://localhost:3001/api/v1/my-profile");
    router.push("/");
    router.refresh();
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
