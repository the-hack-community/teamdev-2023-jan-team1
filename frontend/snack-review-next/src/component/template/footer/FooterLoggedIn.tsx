import { FooterButton } from "./FooterButton";
import { POST_ARTICLE_PATH, MY_PROFILE_PATH, ROOT_PATH } from "@/constants/routes";

export const FooterLoggedIn = (props: { userName: string }) => {
  const { userName } = props;
  return (
    <>
      <FooterButton label="ホーム" href={ROOT_PATH} icon="home" />
      <FooterButton label="投稿" href={POST_ARTICLE_PATH} icon="plus" />
      <FooterButton label={userName} href={MY_PROFILE_PATH} icon="faceSmile" />
    </>
  );
};
