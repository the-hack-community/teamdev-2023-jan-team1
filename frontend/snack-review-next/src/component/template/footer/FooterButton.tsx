/* eslint-disable tailwindcss/no-custom-classname */
import { HomeIcon, PlusIcon, UserCircleIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type IconType = "home" | "plus" | "userCircle" | "faceSmile";

export const FooterButton = (props: { label: string; href: string; icon: IconType }) => {
  const { label, href, icon } = props;
  const renderIcon = (iconType: IconType) => {
    switch (iconType) {
      case "home":
        return <HomeIcon className="mx-auto h-8 w-8 text-black" />;
      case "plus":
        return <PlusIcon className="mx-auto h-8 w-8 text-black" />;
      case "userCircle":
        return <UserCircleIcon className="mx-auto h-8 w-8 text-black" />;
      case "faceSmile":
        return <FaceSmileIcon className="mx-auto h-8 w-8 text-orange-400" />;
      default:
        return <HomeIcon className="mx-auto h-8 w-8 text-black" />;
    }
  };
  return (
    <Link href={href} className="text-2xs w-32 overflow-hidden text-ellipsis whitespace-nowrap text-center font-bold">
      {renderIcon(icon)}
      {label}
    </Link>
  );
};
