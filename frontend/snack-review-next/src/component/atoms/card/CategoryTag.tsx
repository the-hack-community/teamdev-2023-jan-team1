import cc from "classcat";
import type { ArticleType } from "@/lib/zodSchema";
import type { FC } from "react";

type Props = {
  categoryName: ArticleType["categoryName"];
};

export const CategoryTag: FC<Props> = ({ categoryName }) => {
  return (
    <span
      className={cc([
        "shrink-0 rounded-full py-1 px-1.5 font-bold text-white",
        {
          "bg-yellow-400": categoryName === "キャンディ",
          "bg-amber-800": categoryName === "チョコレート",
          "bg-amber-400": categoryName === "ビスケット・クッキー",
          "bg-rose-400": categoryName === "ケーキ",
          "bg-orange-400": categoryName === "ゼリー・プリン",
          "bg-blue-400": categoryName === "アイスクリーム・シャーベット",
          "bg-purple-400": categoryName === "せんべいなど米菓子",
          "bg-green-400": categoryName === "和菓子",
          "bg-gray-400": categoryName === "その他",
        },
      ])}
    >
      {categoryName}
    </span>
  );
};
