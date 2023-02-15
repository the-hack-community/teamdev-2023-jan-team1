import type { FC, ReactNode } from "react";

type Props = {
  id?: string;
  isRequired: boolean;
  children: ReactNode;
};

export const FormLabel: FC<Props> = ({ id, children, isRequired }) => {
  return (
    <label htmlFor={id} className="block text-sm text-gray-700">
      {children}
      {isRequired && <span className="text-lg text-red-400">*</span>}
    </label>
  );
};
