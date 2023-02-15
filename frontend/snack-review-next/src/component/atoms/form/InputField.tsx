"use client";

import { ComponentProps, FC } from "react";
import { useAutoFocus } from "@/lib/useAutoFocus";

type Props = ComponentProps<"input"> & { label?: string; isRequired: boolean; validation?: string };

export const InputField: FC<Props> = ({ label, isRequired, validation, ...restProps }) => {
  const inputRef = useAutoFocus<HTMLInputElement>();

  // バリデーション時の赤文字
  const validationCheck = () => {
    if (validation) {
      const borderColor = " border-red-400";
      const placeholderColor = "placeholder:text-red-300";
      return { borderColor, placeholderColor };
    }
    const borderColor = " border-gray-400";
    const placeholderColor = "placeholder:text-gray-300";
    return { borderColor, placeholderColor };
  };
  const color = validationCheck();

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
          className={`h-9 w-full appearance-none rounded-lg border ${color.borderColor} px-3 leading-tight text-gray-700 placeholder:font-light ${color.placeholderColor}  focus:border-blue-400 focus:outline-none`}
          {...restProps}
        />
        <p className="text-red-400">{validation}</p>
      </div>
    </div>
  );
};
