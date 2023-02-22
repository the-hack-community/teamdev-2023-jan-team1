/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import type { ArticleType, postArticleType } from "@/lib/zodSchema";
import type { FC } from "react";
import { CategoryTag } from "@/component/atoms/card/CategoryTag";
import { ConfirmModal } from "@/component/atoms/card/ConfirmModal";
import { EditAndDeleteIcons } from "@/component/atoms/card/EditAndDeleteIcons";
import { formatDate } from "@/lib/helpers";

type Props = {
  article: ArticleType;
};

export const ArticleDetailInfo: FC<Props> = ({ article }) => {
  const { title, content, categoryName, userName, imageUrl, shopsInformation, allowEditFlag, updatedAt, id } = article;
  const articleState = {
    title,
    content,
    category: categoryName,
    shopInfo: shopsInformation || "",
    shopUrl: "",
  } satisfies postArticleType;

  const date = formatDate(updatedAt);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src={imageUrl || "/no-image-carousel.png"}
        width={320}
        height={308}
        alt={title}
        className="h-72 w-full object-cover"
      />
      <div className="absolute top-64 w-full rounded-t-3xl bg-white p-8">
        <div className="grid grid-cols-1 gap-2">
          <p className="text-2xl font-bold">{title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden text-xs text-gray-400">
              <CategoryTag categoryName={categoryName} />
              <div>
                <p>{userName}</p>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex space-x-6">
              {allowEditFlag && <EditAndDeleteIcons isOpen={isOpen} setIsOpen={setIsOpen} id={id || 1} />}
            </div>
          </div>
          <p className="text-sm text-gray-400 line-clamp-1">{shopsInformation}</p>
          <p className="mt-6 leading-8">{content}</p>
          <div className="h-20" />
        </div>
        <ConfirmModal
          articleState={articleState}
          modalType="delete"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          id={id || 1}
        />
      </div>
    </div>
  );
};
