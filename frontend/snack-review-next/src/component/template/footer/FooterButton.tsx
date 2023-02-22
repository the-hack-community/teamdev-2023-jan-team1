/* eslint-disable no-unused-vars */
import { HomeIcon, PlusIcon, UserCircleIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { isEditAtom } from "@/lib/atom";

type IconType = "home" | "plus" | "userCircle" | "faceSmile";

export const FooterButton = (props: { label: string; href: string; icon: IconType }) => {
  const { label, href, icon } = props;
  const router = useRouter();
  const [isEdit, setIsEdit] = useAtom(isEditAtom);
  const renderIcon = (iconType: IconType) => {
    switch (iconType) {
      case "home":
        return <HomeIcon className="mx-auto mb-1 h-6 w-6" />;
      case "plus":
        return <PlusIcon className="mx-auto mb-1 h-6 w-6" />;
      case "userCircle":
        return <UserCircleIcon className="mx-auto mb-1 h-6 w-6" />;
      case "faceSmile":
        return <FaceSmileIcon className="mx-auto mb-1 h-6 w-6 text-orange-400" />;
      default:
        return <HomeIcon className="mx-auto mb-1 h-6 w-6" />;
    }
  };

  const handleClick = () => {
    setIsEdit(false);
    router.push(href);
  };
  return (
    <button
      type="button"
      className="w-32 overflow-hidden text-ellipsis whitespace-nowrap text-center text-2xs font-bold"
      onClick={handleClick}
    >
      {renderIcon(icon)}
      {label}
    </button>
  );
};
