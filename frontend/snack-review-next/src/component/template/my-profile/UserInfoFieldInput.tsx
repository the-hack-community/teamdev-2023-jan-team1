"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import type { ComponentProps, FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField } from "@/component/atoms/form/InputField";

type Props = {
  value: string;
  setIsEditing: (arg: boolean) => void;
};

export const UserInfoFieldInput: FC<Props> = ({ value, setIsEditing }) => {
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    // TODO: ユーザー情報更新処理を実装
  };

  return (
    <div className="px-2 py-2.5">
      <div className="flex items-center gap-3">
        <InputField value={value} isRequired={false} />
        <CommonButton isPrimary handleClick={handleClick}>
          保存
        </CommonButton>
        <XMarkIcon className="h-8" onClick={() => setIsEditing(false)} />
      </div>
    </div>
  );
};
