"use client";

import { FormLabel } from "./FormLabel";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"textarea"> & { label?: string; isRequired: boolean };

export const TextAreaField: FC<Props> = ({ label, isRequired, ...restProps }) => {
  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <div>
        <textarea className="input-primary h-28" {...restProps} />
      </div>
    </div>
  );
};
