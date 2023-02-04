"use client";

import { useState } from "react";
import { CategoryTag } from "./CategoryTag";
import { ConfirmModal } from "./ConfirmModal";
import { EditAndDeleteIcons } from "./EditAndDeleteIcons";
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
  categoryColor,
}) => {
  // FIXME: isLoggedInはグローバルな値から取得ように変更
  const isLoggedIn = true;

  const date = formatDate(updatedAt);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className="mt-2 font-bold line-clamp-1">{title}</h2>
      <div className="flex items-center gap-2 overflow-hidden text-2xs text-gray-400">
        <CategoryTag categoryName={categoryName} categoryColor={categoryColor} />
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
      <ConfirmModal title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
