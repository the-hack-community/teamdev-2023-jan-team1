"use client";

import { CommonButton } from "./CommonButton";
import type { ComponentProps, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SubmitButton: FC<Props> = ({ children }) => {
  const handleSubmit: ComponentProps<"button">["onSubmit"] = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-6">
      <CommonButton isPrimary isFullWidth handleClick={handleSubmit}>
        {children}
      </CommonButton>
    </div>
  );
};
