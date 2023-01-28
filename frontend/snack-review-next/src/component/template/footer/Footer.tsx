import { FooterLoggedIn } from "./FooterLoggedIn";
import { FooterNotLoggedIn } from "./FooterNotLoggedIn";

type FooterProps = {
  isLoggedIn: boolean;
  userName?: string;
};

export const Footer = (props: FooterProps) => {
  return (
    <div className="w-full h-16 fixed bottom-0 bg-gray-100 align-middle">
      {props.isLoggedIn ? <FooterLoggedIn userName={props.userName} /> : <FooterNotLoggedIn />}
    </div>
  );
};
