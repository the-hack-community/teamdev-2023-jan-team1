"use client";

import Cookies from "js-cookie";
import { CategoryTag } from "./CategoryTag";
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
  const token = Cookies.get("access-token");
  const date = formatDate(updatedAt);

  return (
    <>
      <div className="mt-2 flex items-center justify-between">
        <h2 className="font-bold line-clamp-1">{title}</h2>
        {allowEditFlag && token && (
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
      </div>
    </>
  );
};
