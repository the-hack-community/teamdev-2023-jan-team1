import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import type { FC } from "react";
import { POST_ARTICLE_PATH } from "@/constants/routes";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const EditAndDeleteIcons: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Link href={POST_ARTICLE_PATH}>
        <PencilSquareIcon className="h-6 shrink-0 text-blue-400" />
      </Link>
      <button type="button">
        <TrashIcon className="h-6 shrink-0 text-red-400" onClick={() => setIsOpen(!isOpen)} />
      </button>
    </>
  );
};
