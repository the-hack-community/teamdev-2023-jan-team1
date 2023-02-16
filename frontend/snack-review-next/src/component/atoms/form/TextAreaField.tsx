"use client";

import { FormLabel } from "./FormLabel";
import type { ComponentProps, FC } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormNameType, FormStateType } from "@/constants/InputField";

type Props = ComponentProps<"textarea"> & {
  label?: string;
  isRequired: boolean;
  name: FormNameType;
  register: UseFormRegister<FormStateType>;
  errors: FieldErrors<FormStateType>;
};

export const TextAreaField: FC<Props> = ({ label, isRequired, register, name, errors, ...restProps }) => {
  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <div>
        <textarea className="input-primary h-28" {...restProps} {...register(name)} />
        {errors && <p className="mt-1 text-red-400">{errors[name]?.message}</p>}
      </div>
    </div>
  );
};
