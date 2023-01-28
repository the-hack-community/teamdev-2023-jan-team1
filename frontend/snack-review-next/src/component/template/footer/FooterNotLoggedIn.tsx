import Link from "next/link";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export const FooterNotLoggedIn = () => {
  return (
    <div className="w-full h-16 fixed bottom-0 bg-gray-100 align-middle">
      <div className="h-full mx-16 flex justify-between items-center">
        <Link href="/" className="text-2xs text-center">
          <HomeIcon className="h-8 w-8 text-black" />
          ホーム
        </Link>
        <Link href="/login" className="text-2xs text-center">
          <UserCircleIcon className="h-8 w-8 mx-auto text-black" />
          登録・ログイン
        </Link>
      </div>
    </div>
  );
};
