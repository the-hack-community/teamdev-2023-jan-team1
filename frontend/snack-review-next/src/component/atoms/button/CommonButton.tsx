import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isPrimary: boolean;
};

export const CommonButton: FC<Props> = ({ children, isPrimary }) => {
  return (
    <button
      type="button"
      className={`block w-full rounded-lg py-2 px-4 font-bold text-white  ${
        isPrimary ? "bg-red-400 hover:bg-red-300" : "bg-blue-400 hover:bg-blue-300"
      }`}
    >
      {children}
    </button>
  );
};
