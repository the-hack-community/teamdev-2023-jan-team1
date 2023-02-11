import { UserInfoField } from "./UserInfoField";
import { getUserData } from "@/lib/getData";

export const UserInfo = async () => {
  const { user } = await getUserData();
  const { email, name } = user;

  return (
    <div className="grid grid-cols-1 gap-6">
      <UserInfoField label="メールアドレス" value={email} isEditable={false} />
      <UserInfoField label="ユーザー名" value={name} />
      <UserInfoField label="パスワード" />
    </div>
  );
};
