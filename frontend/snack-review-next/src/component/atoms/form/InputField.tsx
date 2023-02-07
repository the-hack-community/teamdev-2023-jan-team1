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
        <input ref={inputRef} className="input-primary" {...restProps} />
      </div>
    </div>
  );
};
