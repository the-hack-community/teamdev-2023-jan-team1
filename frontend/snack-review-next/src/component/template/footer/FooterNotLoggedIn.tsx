import { FooterButton } from "./FooterButton";
import { SIGN_IN_PATH, ROOT_PATH } from "@/constants/routes";

export const FooterNotLoggedIn = () => {
  return (
    <>
      <FooterButton label="ホーム" href={ROOT_PATH} icon="home" />
      <FooterButton label="登録・ログイン" href={SIGN_IN_PATH} icon="userCircle" />
    </>
  );
};
