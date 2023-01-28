import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const FooterNotLoggedIn = () => {
  return (
    <div className="fixed bottom-0 h-16 w-full bg-gray-100 align-middle">
      <div className="mx-16 flex h-full items-center justify-between">
        <Link href="/" className="text-2xs text-center">
          <HomeIcon className="h-8 w-8 text-black" />
          ホーム
        </Link>
        <Link href="/login" className="text-2xs text-center">
          <UserCircleIcon className="mx-auto h-8 w-8 text-black" />
          登録・ログイン
        </Link>
      </div>
    </div>
  );
};
