import { HomeIcon, PlusIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const FooterLoggedIn = (props: { userName: string }) => {
  const { userName } = props;
  return (
    <div className="mx-4 flex h-full items-center justify-between">
      <Link href="/" className="text-2xs w-32 text-center">
        <HomeIcon className="mx-auto h-8 w-8 text-black" />
        ホーム
      </Link>
      <Link href="/share" className="text-2xs w-32 text-center">
        <PlusIcon className="mx-auto h-8 w-8 text-black" />
        投稿
      </Link>
      <Link href="/account" className="text-2xs w-32 overflow-hidden text-ellipsis whitespace-nowrap text-center">
        <FaceSmileIcon className="mx-auto h-8 w-8 text-orange-400" />
        {userName}
      </Link>
    </div>
  );
};
