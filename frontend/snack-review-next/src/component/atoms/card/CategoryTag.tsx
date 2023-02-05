import cc from "classcat";
import type { CategoryNameType } from "@/lib/zodSchema";
import type { FC } from "react";

type Props = {
  categoryName: CategoryNameType;
};

export const CategoryTag: FC<Props> = ({ categoryName }) => {
  return (
    <span
      className={cc([
        "shrink-0 rounded-full py-1 px-1.5 font-bold text-white",
        {
          "bg-red-400": categoryName === "焼き菓子",
          "bg-blue-400": categoryName === "ケーキ",
          "bg-green-400": categoryName === "チョコ",
          "bg-purple-400": categoryName === "和菓子",
          "bg-yellow-400": categoryName === "その他",
        },
      ])}
    >
      {categoryName}
    </span>
  );
};
