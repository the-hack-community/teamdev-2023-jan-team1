import type { ArticlesType } from "@/app/lib/zodSchema";
import type { FC } from "react";

type Props = {
  popularArticles: ArticlesType["popularArticles"];
};

// FIXME: カルーセルがスワイプされると対象のインジゲーターに色がつくようにする
export const CarouselIndicator: FC<Props> = ({ popularArticles }) => {
  return (
    <div className="flex w-full justify-center gap-2 py-2">
      {popularArticles.map((article) => {
        return <div className="h-2 w-2 rounded-full bg-gray-300" key={article.id} />;
      })}
    </div>
  );
};
