import { CategoryTag } from "./CategoryTag";
import type { ArticleType } from "@/app/lib/zodSchema";
import type { FC } from "react";
import { formatDate } from "@/app/lib/helpers";

type Props = Pick<ArticleType, "title" | "categoryName" | "userName" | "shopsInformation" | "content" | "updatedAt">;

export const CardInfo: FC<Props> = ({ title, categoryName, userName, shopsInformation, content, updatedAt }) => {
  const date = formatDate(updatedAt);

  return (
    <>
      <h2 className="font-bold line-clamp-1">{title}</h2>
      <div className="flex items-center gap-2 overflow-hidden text-2xs text-gray-400">
        <CategoryTag>{categoryName}</CategoryTag>
        <div>
          <div className="flex items-center gap-1">
            <span>{date}</span>
            <span>{userName}</span>
          </div>
          <p className="line-clamp-1">{shopsInformation}</p>
        </div>
      </div>
      <p className="text-xs line-clamp-2">{content}</p>
    </>
  );
};
