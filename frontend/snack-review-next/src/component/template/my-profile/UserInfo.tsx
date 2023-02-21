import { UserInfoField } from "./UserInfoField";
import type { UserType } from "@/lib/zodSchema";
import type { FC } from "react";

type Props = {
  user: UserType;
};

export const UserInfo: FC<Props> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <UserInfoField label="メールアドレス" value={user.email} isEditable={false} />
      <UserInfoField label="ユーザー名" value={user.name} />
      <UserInfoField label="パスワード" />
    </div>
  );
};
