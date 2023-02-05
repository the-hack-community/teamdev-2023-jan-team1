import { FooterButton } from "./FooterButton";

export const FooterLoggedIn = (props: { userName: string }) => {
  const { userName } = props;
  return (
    <>
      <FooterButton label="ホーム" href="/" icon="home" />
      <FooterButton label="投稿" href="/share" icon="plus" />
      <FooterButton label={userName} href="/account" icon="faceSmile" />
    </>
  );
};
