"use client";

import { useState } from "react";
import { UserInfoFieldInput } from "./UserInfoFieldInput";
import { UserInfoFieldValue } from "./UserInfoFieldValue";
import type { FC } from "react";

type Props = {
  label: "メールアドレス" | "ユーザー名" | "パスワード";
  value?: string;
  isEditable?: boolean;
};

export const UserInfoField: FC<Props> = ({ value = "************", label, isEditable = true }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3 className="text-sm font-bold">{label}</h3>
      {isEditing ? (
        <UserInfoFieldInput value={value} setIsEditing={setIsEditing} />
      ) : (
        <UserInfoFieldValue value={value} setIsEditing={setIsEditing} isEditable={isEditable} />
      )}
      <hr />
    </div>
  );
};
