import Image from "next/image";
import type { ArticleType } from "@/lib/zodSchema";
import type { FC } from "react";
import { CardInfo } from "@/component/atoms/card/CardInfo";

type Props = {
  article: ArticleType;
};

export const CardSmall: FC<Props> = ({ article }) => {
  const { id, imageUrl, title } = article;

  return (
    <button type="button" className="rounded-xl shadow-md">
      <div key={id} className="flex max-w-full flex-auto">
        <Image
          src={imageUrl || "/no-image-card.png"}
          width={112}
          height={112}
          alt={title}
          className="h-28 w-28 shrink-0 rounded-l-xl object-cover"
        />
        <div className="flex flex-col gap-2 px-2">
          <CardInfo {...article} />
        </div>
      </div>
    </button>
  );
};
