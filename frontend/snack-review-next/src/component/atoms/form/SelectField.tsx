"use client";

import { FormLabel } from "./FormLabel";
import type { ArticleStateKeyType, ArticleStateType } from "@/constants/InputField";
import type { ComponentProps, FC } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = ComponentProps<"select"> & {
  label?: string;
  isRequired: boolean;
  name: ArticleStateKeyType;
  register: UseFormRegister<ArticleStateType>;
  errors: FieldErrors<ArticleStateType>;
};

export const SelectField: FC<Props> = ({ label, isRequired, register, errors, name, ...restProps }) => {
  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <select
        {...restProps}
        {...register(name)}
        className="select w-full rounded-lg border border-gray-400 bg-white px-3 text-base font-normal leading-tight placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
      >
        <option disabled value="default">
          お菓子の種類を選択
        </option>
        <option value="焼き菓子">焼き菓子</option>
        <option value="ケーキ">ケーキ</option>
        <option value="チョコ">チョコ</option>
        <option value="和菓子">和菓子</option>
        <option value="その他">その他</option>
      </select>
      {errors && <p className="mt-1 text-red-400">{errors[name]?.message}</p>}
    </div>
  );
};
