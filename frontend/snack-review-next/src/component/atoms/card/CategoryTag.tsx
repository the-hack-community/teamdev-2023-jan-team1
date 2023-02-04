import type { CategoryNameType } from "@/lib/zodSchema";
import type { FC } from "react";

type Props = {
  categoryName: CategoryNameType;
  categoryColor: string;
};

export const CategoryTag: FC<Props> = ({ categoryName, categoryColor }) => {
  return (
    <span className={`${categoryColor} shrink-0 rounded-full py-1 px-1.5 font-bold text-white`}>{categoryName}</span>
  );
};
