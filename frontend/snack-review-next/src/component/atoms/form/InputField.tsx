"use client";

import { ComponentProps, FC } from "react";
import { useAutoFocus } from "@/lib/useAutoFocus";

type Props = ComponentProps<"input"> & { label?: string; isRequired: boolean; validation?: string };

export const InputField: FC<Props> = ({ label, isRequired, validation, ...restProps }) => {
  const inputRef = useAutoFocus<HTMLInputElement>();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={restProps.id} className="block text-sm text-gray-700">
          {label}
          {isRequired && <span className="text-lg text-red-400">*</span>}
        </label>
      )}
      <div>
        <input
          ref={inputRef}
          className="h-9 w-full appearance-none rounded-lg border border-gray-400 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
          {...restProps}
        />
        <p className="text-red-400">{validation}</p>
      </div>
    </div>
  );
};
