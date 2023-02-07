"use client";

import { useState } from "react";
import { CategoryTag } from "./CategoryTag";
import { ConfirmModal } from "./ConfirmModal";
import type { ArticleType } from "@/lib/zodSchema";
import type { FC } from "react";
import { formatDate } from "@/lib/helpers";

type Props = Pick<
  ArticleType,
  | "title"
  | "categoryName"
  | "userName"
  | "shopsInformation"
  | "content"
  | "updatedAt"
  | "allowEditFlag"
  | "url"
  | "categoryColor"
>;

export const CardInfo: FC<Props> = ({
  title,
  categoryName,
  userName,
  shopsInformation,
  content,
  updatedAt,
  allowEditFlag,
}) => {
  // FIXME: isLoggedInはグローバルな値から取得ように変更
  const isLoggedIn = true;

  const date = formatDate(updatedAt);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex items-center justify-between">
        <h2 className="font-bold line-clamp-1">{title}</h2>
        {allowEditFlag && isLoggedIn && (
          <p className="shrink-0 rounded-md bg-red-400 px-2 py-1 text-xs text-white">自分の投稿</p>
        )}
      </div>
      <div className="flex items-center gap-2 overflow-hidden text-2xs text-gray-400">
        <CategoryTag categoryName={categoryName} />
        <div>
          <div className="flex items-center gap-1">
            <span>{date}</span>
            <span>{userName}</span>
          </div>
          <p className="line-clamp-1">{shopsInformation}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-xs line-clamp-2">{content}</p>
        {allowEditFlag && isLoggedIn && <EditAndDeleteIcons isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      <ConfirmModal title={title} modalType="delete" isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
