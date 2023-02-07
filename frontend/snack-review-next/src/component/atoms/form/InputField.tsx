"use client";

import { FormLabel } from "./FormLabel";
import type { ComponentProps, FC } from "react";
import { useAutoFocus } from "@/lib/useAutoFocus";

type Props = ComponentProps<"input"> & { label?: string; isRequired: boolean };

export const InputField: FC<Props> = ({ label, isRequired, ...restProps }) => {
  const inputRef = useAutoFocus<HTMLInputElement>();

  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <div>
        <input
          ref={inputRef}
          className="h-9 w-full appearance-none rounded-lg border border-gray-400 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
          {...restProps}
        />
      </div>
    </div>
  );
};
