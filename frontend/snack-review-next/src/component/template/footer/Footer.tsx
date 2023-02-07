import { FooterLoggedIn } from "./FooterLoggedIn";
import { FooterNotLoggedIn } from "./FooterNotLoggedIn";

export const Footer = (props: { isLoggedIn: boolean; userName: string }) => {
  const { isLoggedIn, userName } = props;
  return (
    <div className="sticky bottom-0 mt-6 w-full bg-gray-100 py-4 align-middle text-gray-700">
      <nav className={`${isLoggedIn ? "mx-4" : "mx-3"} flex items-center justify-between`}>
        {isLoggedIn ? <FooterLoggedIn userName={userName} /> : <FooterNotLoggedIn />}
      </nav>
    </div>
  );
};
