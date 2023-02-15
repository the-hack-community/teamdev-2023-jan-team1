import type { ButtonHTMLAttributes, ComponentProps, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isPrimary: boolean;
  isFullWidth?: boolean;
  type: Exclude<ButtonHTMLAttributes<HTMLButtonElement>["type"], undefined>;
  handleClick?: ComponentProps<"button">["onClick"];
  handleSubmit?: ComponentProps<"button">["onSubmit"];
};

export const CommonButton: FC<Props> = ({
  children,
  isPrimary,
  isFullWidth = false,
  type = "button",
  handleClick,
  handleSubmit,
}) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`block shrink-0 rounded-lg py-3 px-4 text-sm font-bold text-white  ${
        isPrimary ? "bg-red-400 hover:bg-red-300" : "bg-blue-400 hover:bg-blue-300"
      } ${isFullWidth && "w-full"}`}
      onClick={handleClick}
      onSubmit={handleSubmit}
    >
      {children}
    </button>
  );
};
