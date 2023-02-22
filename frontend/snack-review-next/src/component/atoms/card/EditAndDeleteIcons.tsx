/* eslint-disable no-unused-vars */
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import type { FC } from "react";
import { POST_ARTICLE_PATH } from "@/constants/routes";
import { articleIdAtom, isEditAtom } from "@/lib/atom";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  id: number;
};

export const EditAndDeleteIcons: FC<Props> = ({ isOpen, setIsOpen, id }) => {
  const router = useRouter();
  const [articleId, setArticleId] = useAtom(articleIdAtom);
  const [isEdit, setIsEdit] = useAtom(isEditAtom);

  const handleClick = () => {
    setArticleId(id);
    setIsEdit(true);
    router.push(POST_ARTICLE_PATH);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        <PencilSquareIcon className="h-6 shrink-0 text-blue-400" />
      </button>
      <button type="button">
        <TrashIcon className="h-6 shrink-0 text-red-400" onClick={() => setIsOpen(!isOpen)} />
      </button>
    </>
  );
};
