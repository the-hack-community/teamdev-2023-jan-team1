import type { ComponentProps, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isPrimary: boolean;
  isFullWidth?: boolean;
  handleClick: ComponentProps<"button">["onClick"];
};

export const CommonButton: FC<Props> = ({ children, isPrimary, isFullWidth = false, handleClick }) => {
  return (
    <button
      type="button"
      className={`block shrink-0 rounded-lg py-3 px-4 text-sm font-bold text-white  ${
        isPrimary ? "bg-red-400 hover:bg-red-300" : "bg-blue-400 hover:bg-blue-300"
      } ${isFullWidth && "w-full"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
