import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CategoryTag: FC<Props> = ({ children }) => {
  return <span className="shrink-0 rounded-full bg-red-400 py-1 px-1.5 font-bold text-white">{children}</span>;
};
