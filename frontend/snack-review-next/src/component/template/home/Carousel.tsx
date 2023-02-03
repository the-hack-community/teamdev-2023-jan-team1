import Image from "next/image";
import type { ArticlesType } from "@/lib/zodSchema";
import type { FC } from "react";
import { CardInfo } from "@/component/atoms/card/CardInfo";

type Props = {
  popularArticles: ArticlesType["popularArticles"];
};

export const Carousel: FC<Props> = ({ popularArticles }) => {
  return (
    <div className="carousel-center carousel h-64 max-w-xl space-x-6">
      <div className="pl-10" />
      {popularArticles.map((article) => {
        const { title, imageUrl } = article;

        return (
          <div className="carousel-item">
            <div className="relative">
              <Image
                priority
                src={imageUrl}
                width={320}
                height={208}
                alt={title}
                className="h-52 w-80 rounded-3xl object-cover"
              />
              <div className="absolute top-32 mx-6 flex flex-col gap-1 rounded-3xl bg-white p-4 shadow-md">
                <CardInfo {...article} />
              </div>
            </div>
          </div>
        );
      })}
      <div className="pr-10" />
    </div>
  );
};
