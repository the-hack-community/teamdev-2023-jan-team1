import { FooterLoggedIn } from "./FooterLoggedIn";
import { FooterNotLoggedIn } from "./FooterNotLoggedIn";

export const Footer = (props: { isLoggedIn: boolean; userName: string }) => {
  const { isLoggedIn, userName } = props;
  return (
    <div className="w-full h-16 fixed bottom-0 bg-gray-100 align-middle">
      {isLoggedIn ? <FooterLoggedIn userName={userName} /> : <FooterNotLoggedIn />}
    </div>
  );
};
