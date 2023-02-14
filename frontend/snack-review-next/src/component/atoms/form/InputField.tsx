"use client";

import { FormLabel } from "./FormLabel";

import type { ArticleStateKeyType, ArticleStateType } from "@/constants/InputField";
import type { ComponentProps, FC } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = ComponentProps<"input"> & {
  label?: string;
  isRequired: boolean;
  name: ArticleStateKeyType;
  register: UseFormRegister<ArticleStateType>;
  errors: FieldErrors<ArticleStateType>;
};

export const InputField: FC<Props> = ({ label, isRequired, register, errors, name, ...restProps }) => {
  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <div>
        <input className="input-primary" {...restProps} {...register(name)} />
        {errors && <p className="mt-1 text-red-400">{errors[name]?.message}</p>}
      </div>
    </div>
  );
};
