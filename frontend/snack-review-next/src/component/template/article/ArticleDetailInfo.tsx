"use client";

import Image from "next/image";
import { useState } from "react";
import type { ArticleType } from "@/lib/zodSchema";
import type { FC } from "react";
import { CategoryTag } from "@/component/atoms/card/CategoryTag";
import { ConfirmModal } from "@/component/atoms/card/ConfirmModal";
import { EditAndDeleteIcons } from "@/component/atoms/card/EditAndDeleteIcons";
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
  | "imageUrl"
>;

export const ArticleDetailInfo: FC<Props> = ({
  title,
  categoryName,
  userName,
  shopsInformation,
  content,
  updatedAt,
  allowEditFlag,
  imageUrl,
}) => {
  // FIXME: isLoggedInはグローバルな値から取得ように変更
  const isLoggedIn = true;

  const date = formatDate(updatedAt);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Image
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
              {allowEditFlag && isLoggedIn && <EditAndDeleteIcons isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
          </div>
          <p className="text-sm text-gray-400 line-clamp-1">{shopsInformation}</p>
          <p className="mt-6 leading-8">{content}</p>
          <div className="h-20" />
        </div>
        <ConfirmModal title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
