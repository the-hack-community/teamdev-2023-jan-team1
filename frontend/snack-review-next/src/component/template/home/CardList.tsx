import Image from "next/image";
import { CardInfo } from "../../atoms/card/CardInfo";
import type { ArticlesType } from "@/app/lib/zodSchema";
import type { FC } from "react";

type Props = {
  newArticles: ArticlesType["newArticles"];
};

export const CardList: FC<Props> = ({ newArticles }) => {
  return (
    <div className="px-4">
      <h2 className="mb-4 font-bold">Shop List</h2>
      <div className="flex flex-col gap-2">
        {newArticles.map((article) => {
          const { id, title, imageUrl } = article;

          return (
            <div key={id} className="flex max-w-full flex-auto rounded-xl shadow-md">
              <Image
                src={imageUrl}
                width={112}
                height={112}
                alt={title}
                className="h-28 w-28 shrink-0 rounded-l-xl object-cover"
              />
              <div className="flex flex-col gap-1 p-2">
                <CardInfo {...article} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
