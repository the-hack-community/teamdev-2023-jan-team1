import { FooterButton } from "./FooterButton";

export const FooterNotLoggedIn = () => {
  return (
    <>
      <FooterButton label="ホーム" href="/" icon="home" />
      <FooterButton label="登録・ログイン" href="/login" icon="userCircle" />
    </>
  );
};
