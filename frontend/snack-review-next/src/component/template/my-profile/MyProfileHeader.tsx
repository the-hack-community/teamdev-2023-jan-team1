"use client";

import type { ComponentProps, FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";

export const MyProfileHeader: FC = () => {
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    // TODO: ログアウト処理を実装
  };

  return (
    <div className="my-6 grid grid-cols-3 items-center gap-6">
      <h2 className="col-span-2 font-bold">アカウント情報</h2>

      <CommonButton isPrimary={false} handleClick={handleClick}>
        ログアウト
      </CommonButton>
    </div>
  );
};
